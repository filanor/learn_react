import React from 'react';
import {connect} from 'react-redux';
// import {inc, dec, rnd} from '../actions'
import * as actions from '../actions';
// import {bindActionCreators} from 'redux';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className = "jumbotron">
            <h1>{counter}</h1>
            <button onClick = {dec} className = "btn btn-primary">DEC</button>
            <button onClick = {inc} className = "btn btn-primary">INC</button>
            <button onClick = {rnd} className = "btn btn-primary">RND</button>
        </div>
    )
}

// Функция получает из store нужные нам параметры и возвращает их как объект, который
// дальше используется как пропсы 
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

// connect выполняет следующие действия сама, поэтому mapDispatchToProps нам не нужна
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch);  

    // const {inc, dec,rnd} и return{inc,dec, rnd} одинаковые, поэтому просто return bindAct...
    // const {inc, dec,rnd} = bindActionCreators(actions, dispatch);  
    // return {
    //     inc,    // тоже самое что и inc: inc
    //     dec,
    //     rnd
        // перенесено в action
        // rnd: () => {
        //     const value = Math.floor(Math.random()*10)
        //     rnd(value);
        // }
        
        //inc: () => dispatch({type: 'INC'}) 

        // inc: ()=> dispatch(inc()),
        // dec: ()=> dispatch(dec()),
        // rnd: ()=> {
        //     const value = Math.floor(Math.random()*10)
        //     dispatch(rnd(value))
        // }
    // }
//}

// export default Counter;
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, actions)(Counter);
// таким образом функция connect принимает параметры и конфигурации в первые скобки, и компонент во 
// вторые скобки.
// В итоге она форзвращает нам обернутый в функцию компонент Counter. Таким образом мы будем брать 
// нужные данные из store и передавать их сразу в Counter