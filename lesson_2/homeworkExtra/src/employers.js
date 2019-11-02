//const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

export default class Employers{
    constructor (employers){
        //this.employers = employers;
        this.employersNames = employers.filter( item => item.length > 0 && item.length != '').map( item => item.toLowerCase().trim());
    }

    getEmployersNames() {
        return this.employersNames
    }
}
