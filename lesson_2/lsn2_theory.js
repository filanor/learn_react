/*Урок №2
Модульная структура, зачем она нужна в React. Собираем проект


Ссылки 
ES6 классы
http://jsraccoon.ru/es6-classes

Babel
https://babeljs.io/

Webpack
https://webpack.js.org/

Create React App
https://www.npmjs.com/package/create-react-app

Create React App
https://create-react-app.dev/

Создание шаблона с нуля
https://vanillaweb.ru/create-react-boilerplate/
*/




function button() {
    return 'button';
}

// В js классы это по сути функции, обернутые в синтаксический сахар. 
// Класс, это сущность из которой можно создавать экземпляры

//Создадим простой пример класса
class Slider {
    // Коструктор запускается при создании класса
    constructor(width, height, count) {
        this.width = width; // ширина конкретного слайдера, а не всех
        this.height = height;
        this.count = count;
    }
    // Между функциями  и конструкторами нельзя ставить запятые
    nextSlide() {
        console.log('Moving forward');
    }
    prevSlide() {
        console.log('Moving back');
    }
    whoAmI() {
        console.log(this.width, this.height, this.count); 
        //this, чтобы выводились элементы конкретного класса
    }
}
const slider = new Slider(600, 800, 5), // создадим класс и запускаем конструктор
      someSlider = new Slider(300, 450, 10);
//slider.whoAmI(); // 600 800 5
//someSlider.whoAmI() == 300 450 10 


// Классы могут наследовать другие классы (extends)

class AutoSlider extends Slider {
    constructor (width, height, count, auto){
        super(width, height, count) // наследуем параметры родителс с помощью super()
        this.auto = auto // этого элемента не у родителя. Он только в AutoSlider
    }
    play() {
        console.log(`Autoplay: ${this.auto}`)
    }
}
/*
const slider = new AutoSlider(500, 500, 4, true);
slider.whoAmI(); // наследующий класс может использовать элементы родителя
slider.play(); // и свои.
*/

// Возвращаемся к модульности. Для того что бы разбить по пайлам необходимо
// экспортировать нужные данные:
//export {button as btn, Slider};
// Название сущностей можно менять, как при экспорте так и при импорте
// как показано на примере button as btn,

export {button} // можно комбинировать с экспортом по умолчанию

export default Slider;
// Экспортируем по умолчанию
// export default может быть только 1 в файле