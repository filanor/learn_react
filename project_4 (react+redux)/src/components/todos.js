import React from 'react';
import {toggleTODO} from '../actions';
import {connect} from 'react-redux';
import Todo from './todo';


const Todos = ({todos, toggleTODO}) => {
    console.log(todos);
    if(todos.length === 0){
      return (
        <div className="task-block">You are free</div>
      )
    }
    return (
        <div className="task-block">
          {
            todos.map( todo => {
              return <Todo key={todo.id} text={todo.text} status = {todo.status} toggle = {() => toggleTODO(todo.id)}/>
            })
          }
        </div>
    )
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    todos: state
  }
}

const mapDispatchToProps = {
  toggleTODO
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);