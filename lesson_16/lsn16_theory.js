setState
import reducer from '../project_4 (react+redux)/src/reducer';

{a: 0, b: 0}
setState({ a: 500});
{a:500, b: 0}


reducer
{a: 0, b: 0}
const reducer = (state, action) => {
    return {a: 500};
}
{a:500};
// редюсер полностью перезаписывает стейт, поэтому нужно прописывать все стейты
const reducer = (state, action) => {
    return {a: 500, b: state.b};
}
{a: 500, b: 0}







/// использование mapDispatchToProps

const mapDispatchToProps = {
    menuLoaded: menuLoaded,
    menuRequested
}
// До этого состояния сократили описанную ниже функцию. Это возможно за счет connect() все остальное 
//она делает сама.  Таким образом мы передаем функции connect() объект, который содержит
// actionCreater и действие из компонента

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         menuLoaded: (newMenu) => {
//             dispatch(menuLoaded(newMenu));
//         }
//     }
// }

// Для понимания того что происходит
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         menuLoaded: (newMenu) => {
//             dispatch({
//                 type: 'MENU_LOADED',
//                 payload: newMenu
//             })
//         }
//     }
// }






//export default WithRestoService ()( connect(mapStateToProps, mapDispatchToProps)(MenuList) );

// MenuList обернут в компонент высшего порядка connect, который обернут
// в компонент высшего порядка WithRestoService