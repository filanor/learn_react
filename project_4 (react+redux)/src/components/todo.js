import React from 'react';

const Todo = ({text, status, toggle}) => {
    const style = status ? "task done" : "task";
    return (
        <div className= {style}>
            <span onClick = {toggle}>{text}</span>
        </div>
    )
} 

export default Todo;