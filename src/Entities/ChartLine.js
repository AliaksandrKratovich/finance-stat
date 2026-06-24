import { min, max } from 'date-fns';

export class ChartLine {
    color;
    categoryTitle;
    transactions;

    constructor(transactions, category) {
        this.transactions = transactions;
        this.color = category.color;
        this.categoryTitle = category.title;
    }

    minTransactionDate() {
        if (this.transactions.length === 0) return;
        return min(this.transactions.map((x) => new Date(x.date)));
    }

    maxTransactionDate() {
        if (this.transactions.length === 0) return;
        return max(this.transactions.map((x) => new Date(x.date)));
    }
}