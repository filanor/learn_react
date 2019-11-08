/**
 * Подключаем стили 

Знакомимся с styled-components


Sass-loader
https://github.com/webpack-contrib/sass-loader

Sass in CRA
https://create-react-app.dev/docs/adding-a-sass-stylesheet/

Css-modules
https://habr.com/post/270103/

Reactstrap
https://reactstrap.github.io/

Css in JS
https://github.com/MicheleBertoli/css-in-js

Styled-components
https://www.styled-components.com/

 */




 /**
  * Create React App уже поддерживает sass, его нужно только включить и прописать зависимость
  */

npm install node-sass --save

/** устанавливаем node-sass  и добавляем его в зависимость
 * после этого в коде можно подключать sass файлы
*/


/**
 * 
 * Для использования bootstrap удобнее использовать библиотеку reactstrap.
 * Для установки:
 */
npm install reactstrap bootstrap@4 --save



/*================================
        Styled components и CSSinJS
  ================================


  Styled components - библиотека для использования CSSinJS
  Установка npm install --save styled-components

  Подключение:
*/
import styled from 'styled-components';

// Для использования нужно создать новую переменную
// названиепеременной = styled.нужныйТэг (div или a и тд) `необходимые стили`:
const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`
// И поместить ее в код:
return (
  <AppBlock>
    {/*... какой-то код */}
  </AppBlock>
)

// styled-components может использовать if, что очень удобно в связке с props:
// так же мы можем изменить тег, без переписывания кодов с помощью as 'тег'.
const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'block' /* Используем условие */}
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

// Компоненты могут наследовать друг друга. Для примера создадим новый компонент StyledAppBlock который будет 
// наследовать стили от AppBlock и добавлять свои:
const StyledAppBlock = styled(AppBlock)`
    background-color: grey;
`

const AppHeader = () => {
    return (
      {/* Передаем пропс colored 
      as 'a' заменяет div на a */}
        <Header as 'a' colored> 
            <h1>Filippov Anton</h1>
            <h2>5 записей, из них понравилось 0</h2>
        </Header>
    )
}


/* Плюсы:
- инкапсуляция (стили не будут пересекаться)
- использование условий
Минусы:
- нужно привыкнуть
- название стилей
- при релизе нельзя будет хешировать стили отдельно
- в случие ошибки приложение рухнет
*/