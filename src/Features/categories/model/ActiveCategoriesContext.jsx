import {createContext, useCallback, useMemo, useState} from "react";

export const ActiveCategoriesContext = createContext({});

export const ActiveCategoriesContextProvider = (props) => {
    const {children} = props;
    const [activeCategories, setActiveCategories] = useState([]);

    const toggleCategory = useCallback((category) => {
            if (activeCategories.map(x => x.uid).includes(category.uid)) {
                setActiveCategories(activeCategories.filter(x => x.uid !== category.uid));
            } else {
                setActiveCategories([...activeCategories, category]);
            }
        }, [activeCategories]
    )
    const isCategoryActive = useCallback((uid) => {
        return activeCategories.some((x) => x.uid === uid);
    }, [activeCategories])

    const value = useMemo(() => {
        return {
            activeCategories,
            toggleCategory,
            isCategoryActive
        }
    }, [activeCategories, toggleCategory, isCategoryActive])

    return <ActiveCategoriesContext.Provider value={value}>{children}</ActiveCategoriesContext.Provider>;
}