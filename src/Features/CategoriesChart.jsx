import {useContext, useEffect, useMemo, useState} from "react";
import {ActiveCategoriesContext} from "../Entities/model/ActiveCategoriesContext.jsx";
import {Box} from "@mui/material";
import {useDbTransactions} from "../Entities/model/useDbTransactions.js";
import EChartsReact from "react-echarts-library";
import {ChartLine} from "../Entities/ChartLine.js";
import { eachDayOfInterval, min, max, format  } from 'date-fns';

const CategoriesChart = () => {
    const {activeCategories} = useContext(ActiveCategoriesContext);
    const [chartLines, setChartLines] = useState([]);

    const {transactionsByCategory, getByCategory, reset} = useDbTransactions();
    useEffect(() => {
        reset()
        activeCategories.forEach(category => {
            getByCategory(category.uid);
        });
    }, [activeCategories]);

    useEffect(() => {
        const newChartLines = activeCategories.map(category =>
            new ChartLine(
                transactionsByCategory[category.uid] ?? [],
                category
            )
        );
        setChartLines(newChartLines);
    }, [transactionsByCategory]);

    const option = useMemo(() => {

        const minDate = min(chartLines.map(chartLine => chartLine.minTransactionDate()));
        const maxDate = max(chartLines.map(chartLine => chartLine.maxTransactionDate()));
        const datesRange = eachDayOfInterval({
            start: minDate,
            end: maxDate
        }).map(date => format(date, 'yyyy-MM-dd'));

        const series = chartLines.map((chartLine) => {

            const aggregateMap = new Map();
            chartLine.transactions.forEach(({ date, amountInDefaultCurrency }) => {
                aggregateMap.set(date, (aggregateMap.get(date) ?? 0) + amountInDefaultCurrency);
            });

            return {
                name: chartLine.categoryTitle,
                type: 'line',
                //smooth: true,
                color: chartLine.color,
                data: datesRange.map((date) => aggregateMap.get(date) ?? null),
                connectNulls: true,
            };
        });

        return {
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                top: 10,
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '15%',
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                data: datesRange,
                boundaryGap: false,
            },
            yAxis: {
                type: 'value',
            },
            dataZoom: [
                {
                    type: 'slider',
                    start: 0,
                    end: 100,
                },
                {
                    type: 'inside',
                    start: 0,
                    end: 100,
                },
            ],
            series,
        };
    }, [chartLines]);

    return (
        <>
        <Box
        sx={{
            width: "100%",
            height: "400px",
            border: "1px solid gray",
        }}
        >
            {chartLines.length > 0 && <EChartsReact option={option} style={{ height: 400, width: '100%' }} />}
        </Box>

        </>
    );
}
export default CategoriesChart