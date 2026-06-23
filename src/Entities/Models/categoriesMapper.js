import {iconsMapper} from "./iconsMapper.js";

export class categoriesMapper {
    static mapFromDb(data) {
        let result = [];
        data.values.map(category => {
            const resultItem = {};
            data.columns.forEach((column, index) => {
                resultItem[column] = category[index];
            })
            result.push(resultItem);
            resultItem.color = this.#argbToHex(resultItem.color);
            resultItem.icon = iconsMapper.mapFromDb(resultItem.icon);
        })

        return result;
    }

    static #argbToHex(argb) {
        const hex = (argb >>> 0).toString(16).padStart(8, '0');
        return '#' + hex.slice(2);
    }
}