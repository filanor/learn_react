"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

var _lsn2_theory = _interopRequireWildcard(require("./lsn2_theory"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Импортируем данные& Можно менять название, как Slider as sl
// при обычном экспорте
//import './index.css'  - так импорт css
// import Slider from './lsn2_theory'
// Это импорт элемента экспортированного по умолчанию
// Можно комбинировать
// import Slider, {btn} from './lsn2_theory' 
//можно импортировать все из файла: (в таком случаем в total будет содержаться 
// объект, в котором будут методы btn и класс Slider)
//import * as total from './lsn2_theory' 
// теперь можем использовать их
var slider = new _lsn2_theory.default(400, 300, 5);
slider.whoAmI();
/*==========================================================
 импорты и экспорты не будут работать без сборщика
 самый подходящий вариант: webpack*/