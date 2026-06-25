export class transactionsMapper {
    static mapFromDb(data) {
        let result = [];
        data.values.map(category => {
            const resultItem = {};
            data.columns.forEach((column, index) => {
                resultItem[column] = category[index];
            })
            result.push(resultItem);
            resultItem.amountInDefaultCurrency = this.#amountToNumber(resultItem.amountInDefaultCurrency);
        })

        return result;
    }

    static #amountToNumber(amount) {
        return Number((amount / 100).toFixed(2));
    }
}