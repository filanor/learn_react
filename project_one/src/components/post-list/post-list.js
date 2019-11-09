import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.css';


const PostList = ({posts, onEdit, onDelete, onToggleImportant, onToggleLiked}) => {
    // получаем посты и функцию onDelete
    const elements = posts.map((item) => {
        // Проверяем является ли элемент объектом
       // if ( typeof item === 'object' && srv.isEmpty(item) ){
            const {id, ...itemProps} = item;
            return (
                <ListGroupItem key = {id}>
                {/*  До использования reactstrap <li key = {id} className = 'list-group-item'>*/}
                    {/*<PostListItem 
                        label = {item.label} 
                        important = {item.important} />
                        Можно упростить запись используя spread оператор
                    */}
                    <PostListItem 
                        {...itemProps}
                        onDelete = { () => onDelete(id) /** Передаем функцию onDelete с id в каждый экземпляр PostListItem */} 
                        onEdit = { () => onEdit(id)}
                        onToggleLiked = { () => onToggleLiked(id) }
                        onToggleImportant = { () => onToggleImportant(id) }
                    />
                    {/*onDelete={()=>console.log('Deleted')} /> Передаем функцию, в качестве пропров */}
                    
                </ListGroupItem>
            )
        //}
    });
    

    return (
        <ListGroup className = "app-list">
            {elements}
            {/*Старые записаи 
            <PostListItem label = {posts[0].label} important = {posts[0].important} />
            <PostListItem label = "That is so good"/>
            <PostListItem label = "I need a break"/>*/}
        </ListGroup>
    )
}
// important - стоит ли звездочка. если пишем important то да.

export default PostList;