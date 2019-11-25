import React from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';


const Todos = () => {
    const todos = store.getState();
    return (
        <div class="task-block">
          <div class="task done">
            <label for="">Learn React</label>
          </div>
          <div class="task">
            <label for="">Redux is awesome</label>
          </div>
        </div>
    )
}

const mapStateToProps = (store) => {
    todos: store.getState()
}

export default connect()(Todos);