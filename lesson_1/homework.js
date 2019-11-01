// Меняем тип var на const (не будет изменяться)
const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];


// Заменяем перебор на filter для удаления пустых элементов и меняем тип var на let
let employersNames = employers.filter( item => item.length > 0 && item.length != '')
    //let employersNames = [];
    // for (var i = 0; i < employers.length; i++) {
    // 	if (employers[i].length > 0 && employers[i].length != '') {
    // 		employersNames.push(employers[i]);
    // 	}
    // }
// Заменяем перебор на map
employersNames = employersNames.map( item => item.toLowerCase().trim());
    // for (var i = 0; i < employersNames.length; i++) {
    // 	employersNames[i] = employersNames[i].toLowerCase().trim();
    // }




// Меняем тип var на const (не будет изменяться)
const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

// Используем  Rest параметр, который создаст массив из аргументов и используем стрелочную функцию
// так же в функции убран параметр own, так как по сути он не нужен, если пользователь 
// передает его в функцию, то он поместится в everyCash
calcCash = (...everyCash) => {
    const total = everyCash.reduce( (sum, current) => sum+current); // Заменили перебор циклом на reduce
    return total;
}
// меняем let на const и пользуемся Spread оператором для передачи параметров
const money = calcCash(50, ...sponsors.cash);
console.log(money)






function makeBusiness ({
    owner, 
    director = 'Victor',
    cash,
    emp}){
        const {eu, rus} = sponsors,  // используем диструктуризацию и получем eu и rus
            sumSponsors = eu.concat(rus, 'unexpected sponsor');

        console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: 
${emp}`);
        console.log('And we have a sponsors: ');
        console.log(...sumSponsors);
        console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness({owner: 'Sam', cash : money, emp: employersNames});