import React from 'react';
import {toggleTODO} from '../actions';
import {connect} from 'react-redux';
import Todo from './todo';


const Todos = ({todos, toggleTODO, filter}) => {
    if(todos.length === 0){
      return (
        <div className="task-block">You are free (We don't have TODOs)</div>
      )
    }
    const showedTodos = (filter === true) ? todos.filter(item => item.status === false) : todos;

    return (
        <div className="task-block">
          {
            showedTodos.map( todo => {  
              return <Todo key={todo.id} text={todo.text} status = {todo.status} toggle = {() => toggleTODO(todo.id)}/>
            })
          }
        </div>
    )
}

const mapStateToProps = ({todosReducer, filterReducer}) => {
  return{
    todos: todosReducer,
    filter: filterReducer['filter']
  }
}

const mapDispatchToProps = {
  toggleTODO
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);