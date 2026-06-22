export class categoriesMapper {
    static mapFromDb(data) {
        let result = [];
        data.values.map(category => {
            const resultItem = {};
            data.columns.forEach((column, index) => {
                resultItem[column] = category[index];
            })
            result.push(resultItem);
        })

        return result;
    }
}