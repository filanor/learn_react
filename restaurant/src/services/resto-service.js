export default class RestoService{
    _apiBase = 'http://localhost:3000';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + 
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getMenuItems () {
        return await this.getResource('/menu/');
    }

    async getItem(id) {
        const res = await this.getResource('/menu/');
        console.log(res);
        const item = res.find( (el) => {
            console.log(`el.id: ${el.id}, id: ${id}`);
            return el.id === +id;
        }) 
        console.log(item);
        return item;
    }

    async setOrder(order) {
        // console.log(`order: ${order}`);
        // console.log(order);
        const response = await fetch(`${this._apiBase}/order`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok){
            throw new Error('json error'); 
        }
    }


    //url = 'http://localhost:3000/menu';

    // getMenuItems = async () => {
    //     const response = await fetch(this.url);
    //     if (!response.ok){
    //         throw new Error('Server Error');
    //     }
    //     const result = await response.json();
    //     return result;
    // }

    
}