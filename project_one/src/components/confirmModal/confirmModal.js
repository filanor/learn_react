import React from 'react';
import styled from 'styled-components';
import {Button} from 'reactstrap';


const Modal = styled.div`
    position: absolute;
    width: 450px;
    height: 110px;
    padding: 10px 20px
    border-radius: 10px;
    border: 1px solid #dddddd;
    top: 50%;
    margin-top: -50px
    left: 50%;
    margin-left: -225px;
    background-color: #ffffff;
    z-index: 999;
    flex-wrap: wrap;
    justify-content: space-around;
    display: ${props => props.opened ? 'flex' : 'none'};
    box-shadow: 4px 4px 17px 0px rgba(0,0,0,0.75);
    button{
        width: 100px!important;
    }
    span{
        display: block;
        width: 100%;
        margin-bottom: 10px;
    }
`

const ConfirmModal = ({onAccept, onCancel, opened}) => {
    

    return (
        <Modal opened = {opened}>
            <span>Вы точно собираетесь удалить запись?</span>
            <Button color = "success" onClick = {onAccept}>Да</Button>
            <Button color = "secondary" onClick = {onCancel}>Нет</Button>
        </Modal>
        )
}

export default ConfirmModal;