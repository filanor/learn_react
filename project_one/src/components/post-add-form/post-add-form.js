import React from 'react';
import {Button} from 'reactstrap';
import styled  from 'styled-components';

const Form = styled.form`
    display: flex;
    margin-top: 20px;
    input {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
    }
`

const PostAddForm = ({onAdd}) => {
    return (
        <Form onSubmit = {e => e.preventDefault()}>
            <input 
                type = "text"
                placeholder = "О чем вы думаете сейчас?"
                className = "form-control"
            />
           
            <Button 
                outline color = "secondary" 
                type = "submit" 
                onClick = {()=>onAdd('hello')}> 
                    Добавить
            </Button>
        </Form>
    )
}

export default PostAddForm;