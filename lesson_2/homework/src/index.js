import employers, {employersNames} from './employers';
import money, {sponsors} from './money';

class MakeBusiness {
    constructor ({owner, 
        director = 'Victor',
        cash,
        emp} = {}) {
            this.owner = owner;
            this.director = director;
            this.cash = cash;
            this.emp = emp;
        }

    printMakeBusiness(){
        const {eu, rus} = sponsors,  // используем диструктуризацию и получем eu и rus
            sumSponsors = eu.concat(rus, 'unexpected sponsor');

        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: 
        ${this.emp}`);
        console.log('And we have a sponsors: ');
        console.log(...sumSponsors);
        console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
    }
};

let business = new MakeBusiness({owner: 'Sam', cash : money, emp: employersNames});
business.printMakeBusiness();

