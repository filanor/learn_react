import React from 'react';
import Services from '../../services/services.js'
import './post-list-item.css'

// const getDate = () => {
//     const date = new Date();
//     //const currentDate = date.now();
//     return `${date.getDay()}:${date.getMonth()}:${date.getFullYear()}`
// }

const PostListItem = () => {
    const srv = new Services();
    return (
        <li className = "app-list-item d-flex justify-content-between">
            <span className = "app-list-item-label">Hello World</span>
            <span className = "app-list-item-date">{srv.getDate()}</span>
            <div className = "d-flex justify-content-center align-items-center">
                <button type = "button" className = "btn-star btn-sm">
                    <i className = "fa fa-star"></i>
                </button>
                <button type = "button" className = "btn-trash btn-sm">
                    <i className = "fa fa-trash-o"></i>
                </button>
                <i className = "fa fa-heart"></i>
            </div>
        </li>
    )
}

export default PostListItem;