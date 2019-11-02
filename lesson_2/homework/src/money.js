
const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};


calcCash = (...everyCash) => {
    const total = everyCash.reduce( (sum, current) => sum+current);
    return total;
}


const money = calcCash(50, ...sponsors.cash);

export default money;
export {sponsors};
