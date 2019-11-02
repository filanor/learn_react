
// const sponsors = {
//     cash: [40000, 5000, 30400, 12000],
//     eu: ['SRL', 'PLO', 'J&K'],
//     rus: ['RusAuto', 'SBO']
// };

export default class Money{
    constructor(cash) {
        this.cash = cash;
    }

    calcCash(...everyCash) {
        const total = everyCash.reduce( (sum, current) => sum+current);
        return total;
    }

    getMoney() {
        return this.calcCash(this.cash);
    }

}




// const money = calcCash(50, ...sponsors.cash);

// export default money;
// export {sponsors};
