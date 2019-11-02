"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.button = button;
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.set-prototype-of");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
} // В js классы это по сути функции, обернутые в синтаксический сахар. 
// Класс, это сущность из которой можно создавать экземпляры
//Создадим простой пример класса


var Slider =
/*#__PURE__*/
function () {
  // Коструктор запускается при создании класса
  function Slider(width, height, count) {
    _classCallCheck(this, Slider);

    this.width = width; // ширина конкретного слайдера, а не всех

    this.height = height;
    this.count = count;
  } // Между функциями  и конструкторами нельзя ставить запятые


  _createClass(Slider, [{
    key: "nextSlide",
    value: function nextSlide() {
      console.log('Moving forward');
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      console.log('Moving back');
    }
  }, {
    key: "whoAmI",
    value: function whoAmI() {
      console.log(this.width, this.height, this.count); //this, чтобы выводились элементы конкретного класса
    }
  }]);

  return Slider;
}();

var slider = new Slider(600, 800, 5),
    // создадим класс и запускаем конструктор
someSlider = new Slider(300, 450, 10); //slider.whoAmI(); // 600 800 5
//someSlider.whoAmI() // 300 450 10 
// Классы могут наследовать другие классы (extends)

var AutoSlider =
/*#__PURE__*/
function (_Slider) {
  _inherits(AutoSlider, _Slider);

  function AutoSlider(width, height, count, auto) {
    var _this;

    _classCallCheck(this, AutoSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AutoSlider).call(this, width, height, count)); // наследуем параметры родителс с помощью super()

    _this.auto = auto; // этого элемента не у родителя. Он только в AutoSlider

    return _this;
  }

  _createClass(AutoSlider, [{
    key: "play",
    value: function play() {
      console.log("Autoplay: ".concat(this.auto));
    }
  }]);

  return AutoSlider;
}(Slider);
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


// можно комбинировать с экспортом по умолчанию
var _default = Slider; // Экспортируем по умолчанию
// export default может быть только 1 в файле

exports.default = _default;