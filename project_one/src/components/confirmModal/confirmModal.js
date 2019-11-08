import React from 'react';
import styled from 'styled-components';
import {Button} from 'reactstrap';


const Modal = styled.div`
    position: absolute;
    width: 300px;
    height: 200px;
    top: 50%;
    left: 50%;
    background-color: #ffffff;
    display: ${props => props.opened ? 'block' : 'none'};
    
`

const ConfirmModal = ({opened}) => {
    

    return (
        <Modal opened = {opened}>
            <span>Вы точно собираетесь удалить запись?</span>
            <Button>Да</Button>
            <Button>Нет</Button>
        </Modal>
        )
}

export default ConfirmModal;