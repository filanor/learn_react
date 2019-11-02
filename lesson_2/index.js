// Импортируем данные& Можно менять название, как Slider as sl
import {btn, Slider as sl} from './lsn2_theory'  // при обычном экспорте

//import './index.css'  - так импорт css

// import Slider from './lsn2_theory'
// Это импорт элемента экспортированного по умолчанию
// Можно комбинировать
// import Slider, {btn} from './lsn2_theory' 

//можно импортировать все из файла: (в таком случаем в total будет содержаться 
// объект, в котором будут методы btn и класс Slider)
//import * as total from './lsn2_theory' 

// теперь можем использовать их
const slider = new Slide(400, 300, 5)
slider.whoAmI()




/*==========================================================
 импорты и экспорты не будут работать без сборщика
 самый подходящий вариант: webpack

1. npm init
2. npm install webpack webpack-cli --save-dev
3. npx webpack

babel:
1. npm install --save-dev @babel/core @babel/cli @babel/preset-env
2. npm install --save @babel/polyfill