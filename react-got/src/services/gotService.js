//  Создаем сетевой сервис для нашего приложения на основе API игры престолов https://anapioficeandfire.com/

export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if(!res.ok) {
            //throw new Error({message:`Could not fetch ${url}, status ${res.status}`, status: res.status})
            throw ( {message: `Could not fetch ${url}, status ${res.status}`, status: res.status} );
        }
        
        return await res.json();      
    };
    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        //const res = await this.getResource('/chaters?page=5&pageSize=10'); // для ошибки
        return res.map(this._transformCharacter);
    }
    getCharacter = async (id) => {
        const character = await this.getResource(`/characters/${ this._transformId(id) }`);
        return this._transformCharacter(character);
    }
    getAllBooks = async () => {
        const res = await this.getResource('/books');
        return res.map(this._transformBook);
    }
    getBook = async (id) => {
        const book = await this.getResource(`/books/${ this._transformId(id) }`);
        return this._transformBook(book);
    }
    getAllHouses = async () => {
        const res = await this.getResource('/houses/');
        return res.map(this._transformHouse)
    }
    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${ this._transformId(id) }`);
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
            overlord: house.overlord.length > 0 ? house.overlord : 'unknown',
            ancestraWeapons: house.ancestralWeapons.length > 0 ? house.ancestralWeapons : 'unknown',
            id: `h_${house.url.slice(house.url.lastIndexOf('/')+1)}`
        }
    } 

    _transformBook(book){
        return {
            name: book.name.length > 0 ? book.name : 'unknown',
            numberOfPages: book.numberOfPages > 0 ? book.numberOfPages : 'unknown', 
            publisher: book.publisher.length > 0 ? book.publisher : 'unknown', 
            released: book.released.length > 0 ? book.released : 'unknown',
            id: `b_${book.url.slice(book.url.lastIndexOf('/')+1)}`
        }
    }
    _transformId(id){
        return typeof id === 'number' || !isNaN(+id) ? id : id.slice(2);
    }
}
