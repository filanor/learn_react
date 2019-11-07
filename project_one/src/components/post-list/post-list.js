import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        // Проверяем является ли элемент объектом
        if ( typeof item === 'object' && isEmpty(item) ){
            const {id, ...itemProps} = item;
            return (
                <li key = {id} className = 'list-group-item'>
                    {/*<PostListItem 
                        label = {item.label} 
                        important = {item.important} />
                        Можно упростить запись используя spread оператор
                    */}
                    <PostListItem {...itemProps}/>
                </li>
            )
        }
    });
    
    function isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    return (
        <ul className = "app-list list-group">
            {elements}
            {/*Старые записаи 
            <PostListItem label = {posts[0].label} important = {posts[0].important} />
            <PostListItem label = "That is so good"/>
            <PostListItem label = "I need a break"/>*/}
        </ul>
    )
}
// important - стоит ли звездочка. если пишем important то да.

export default PostList;