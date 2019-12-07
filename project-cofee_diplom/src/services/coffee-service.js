export default class CoffeeService {
    _baseUrl = 'http://localhost:3000';

    async getResource(url){
        const response = await fetch (`${this._baseUrl}${url}`);
        if (!response.ok) {
            throw new Error('Server Error');
        }
        return await response.json();
    }

    async getBests() {
        const bests = await this.getResource('/bestsellers')
        return bests.map(this._transformBest);
    }

    async getCatalog() {
        const catalog = await this.getResource('/coffee')
        return catalog.map(this._transformCatalog);
    }

    async getGoods() {
        const goods = await this.getResource('/goods');
        console.log(`получили с сервера ${goods}`);
        return goods.map(this._transformCatalog);
    }

    async setContact(data) {
        fetch(`${this._baseUrl}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(data)
        })

    }
    _transformCatalog(item, i){
        return {
            ...item,
            id: `c_${i}`
        }
    }

    _transformBest(item, i){
        return {
            ...item,
            id: `b_${i}`
        }
    } 

}
