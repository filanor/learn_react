import React from 'react';
import {addedTODO} from '../actions';
import { connect } from 'react-redux';

const formToDo = ({addedTODO}) => {
    return (
        <div>
            <form className = "form" onSubmit={ 
                        }>
                <input type="text" className = "newTaskInp" placeholder="Enter a new todo item"/>
                <button type = "submit" className = "btn btn-hide">Hide Completed</button>
                <button className = "btn btn-new">Add new</button>
            </form>
        </div>
    );
}

// const mapStateToProps = (state) => {
//     console.log(state);
//     return{
//       todos: state
//     }
//   }
  
  
 
  const mapDispatchToProps = {
    addedTODO
  }
  
export default connect(mapDispatchToProps)(formToDo);
