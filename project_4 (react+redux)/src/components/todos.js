import React from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';


const Todos = ({todos}) => {
    console.log(todos);
    return (
        <div className="task-block">
          <div className="task done">
            <label htmlFor="">Learn React</label>
          </div>
          <div className="task">
            <label htmlFor="">Redux is awesome</label>
          </div>
        </div>
    )
}

const mapStateToProps = ({state}) => {
  return{
    todos: state
  }
}

export default connect(mapStateToProps)(Todos);