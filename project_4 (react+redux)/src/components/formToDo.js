import React, {Component} from 'react';
import {addedTODO, filterToggle} from '../actions';
import { connect } from 'react-redux';

class formToDo extends Component {
    state = {
      text: ''
    }
    textChange = (e) => {
      this.setState({text: e.target.value})
    }

    render(){
      const {addedTODO, filterToggle} = this.props
      return (
          <div>
              <form className = "form" onSubmit = {(e) => {
                      e.preventDefault();
                      if(this.state.text.trim !== ''){
                        addedTODO(this.state.text);
                        document.getElementById('input').value = '';
                      }
                  }}>
                  <input id = "input" onChange = {(e) => {this.textChange(e)} } type="text" className = "newTaskInp" placeholder="Enter a new todo item"/>
                  <button className = "btn btn-hide"
                        onClick = { (e) => {
                            e.preventDefault(); 
                            filterToggle();
                        } } >
                          Hide Completed
                  </button>
                  <button type = "submit" className = "btn btn-new">Add new</button>
              </form>
          </div>
      );
    }
}

  
  
 
  const mapDispatchToProps = {
    addedTODO,
    filterToggle
  }
  
export default connect(null, mapDispatchToProps)(formToDo);
