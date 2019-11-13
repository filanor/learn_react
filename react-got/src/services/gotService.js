//  Создаем сетевой сервис для нашего приложения на основе API игры престолов https://anapioficeandfire.com/

export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
    
        if(!res.ok) {
            //throw new Error({message:`Could not fetch ${url}, status ${res.status}`, status: res.status})
            throw ( {message: `Could not fetch ${url}, status ${res.status}`, status: res.status} );
        }
        
        return await res.json();      
    };
    async getAllCharacters() {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        //const res = await this.getResource('/chaters?page=5&pageSize=10'); // для ошибки
        return res.map(this._transformCharacter);
    }
    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }
    async getAllBooks() {
        const res = await this.getResource('/books');
        return res.map(this._transformBook);
    }
    async getBook(id) {
        const book = await this.getResource(`/books/${id}`);
        return this._transformBook(book);
    }
    async getAllHauses() {
        const res = await this.getResource('/houses');
        return res.map(this._transformHouse)
    }
    async getHause(id) {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house)
    }

    _transformCharacter(char){
        return {
            name: char.name.length > 0 ? char.name : 'unknown',
            gender: char.gender.length > 0 ? char.gender : 'unknown', 
            born: char.born.length > 0 ? char.born : 'unknown', 
            died: char.died.length > 0 ? char.died : 'unknown',
            culture: char.culture.length > 0 ? char.culture : 'unknown',
            id: `c_${char.url.slice(char.url.lastIndexOf('/')+1)}`
        }
    } 

    _transformHouse(house){
        return {
            name: house.name.length > 0 ? house.name : 'unknown',
            region: house.region.length > 0 ? house.region : 'unknown', 
            words: house.words.length > 0 ? house.words : 'unknown', 
            title: house.title.length > 0 ? house.title : 'unknown',
            overlord: house.overlord.length > 0 ? house.overlord : 'unknown',
            ancestraWeapons: house.ancestraWeapons.length > 0 ? house.ancestraWeapons : 'unknown',
            id: `h_${house.url.slice(house.url.lastIndexOf('/')+1)}`
        }
    } 

    _transformBook(book){
        return {
            name: book.name.length > 0 ? book.name : 'unknown',
            numberOfPages: book.numberOfPages.length > 0 ? book.numberOfPages : 'unknown', 
            publiser: book.publiser.length > 0 ? book.publiser : 'unknown', 
            released: book.released.length > 0 ? book.released : 'unknown',
            id: `b_${book.url.slice(book.url.lastIndexOf('/')+1)}`
        }
    } 
}
