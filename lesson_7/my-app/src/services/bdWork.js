export default class BdWork{
    constructor(){
        this._base = 'http://localhost:3000';
    }

    async getFromDb(url){
        const res = await fetch(`${this._base}/${url}`);
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
        }
        
        return await res.json();    
    }

    async getItems(url){
        const res = await this.getFromDb(url);
        return res;
    }
}
