import React from 'react';

const formToDo = () => {
    return (
        <div>
            <form className = "form">
            <input type="text" className = "newTaskInp" placeholder="Enter a new todo item"/>
            <button class = "btn btn-hide">Hide Completed</button>
            <button class = "btn btn-new">Add new</button>
            </form>
        </div>
    );
}

export default formToDo;