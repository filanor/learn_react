import React from 'react';

const formToDo = () => {
    return (
        <div>
            <form className = "form">
            <input type="text" className = "newTaskInp" placeholder="Enter a new todo item"/>
            <button className = "btn btn-hide">Hide Completed</button>
            <button className = "btn btn-new">Add new</button>
            </form>
        </div>
    );
}

export default formToDo;