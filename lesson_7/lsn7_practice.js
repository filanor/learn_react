//  Создаем сетевой сервис для нашего приложения на основе API игры престолов https://anapioficeandfire.com/

class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
    
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
        }
        
        return await res.json();      
    };
    getAllCharacters() {
        return this.getResource('/characters?page=5&pageSize=10');
    }
    getAllCharacter(id) {
        return this.getResource(`/characters/${id}`);
    }

    getAllBooks() {
        return this.getResource('/books');
    }
    getBook(id) {
        return this.getResource(`/books/${id}`);
    }

    getAllHauses() {
        return this.getResource('/houses');
    }
    getHause(id) {
        return this.getResource(`/houses/${id}`);
    }
}

const got = new GotService();

got.getAllHauses()
    .then(res => {                  // в res все элементы 
        res.forEach( item => console.log(item.name)) // с помощью forEach перебираем элементы и выводим имена персонажей
    });

got.getBook(2)
    .then(res => console.log(res));