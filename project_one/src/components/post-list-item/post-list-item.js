import React, {Component} from 'react';
import styled from 'styled-components';
import {Button} from 'reactstrap';
import ConfirmModal from '../confirmModal'
import Services from '../../services/services.js';
import './post-list-item.css';


export default class PostListItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            label: this.props.label,
            form: false,
            modal: false
        }
        this.confirmChanges = this.confirmChanges.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openEditForm = this.openEditForm.bind(this);
    }
    openEditForm() {
        this.setState( ({form}) => ({
            form: true
        }) )
    }

    confirmChanges(e) {
        e.preventDefault();
        this.setState( ({form})=> ({
            form: false
        }));
    }
    inputChange(e) {
        this.setState({label: e.target.value});
    }

    openModal() {
        this.setState({modal: true});
    }
    closeModal(){
        this.setState({modal: false});
    }



    render() {
        const srv = new Services();
        const {important, like, onEdit, onDelete, onToggleImportant, onToggleLiked} = this.props;
        const {label, form} = this.state; 
        let classNames = 'app-list-item d-flex justify-content-between'; // Все классы нашего элемента записи. let, так как будет изменяться
        let editPostClass = "editPost";
        if(important) {
            classNames += ' important'  // если получили important то добавляем нужный класс
        }

        if(like) {
            classNames += ' like'
        }
        if(form) {
            classNames += ' showForm'
        }

        
        return (
            <div className = {classNames}>
                <span 
                className = "app-list-item-label"
                onClick = {onToggleLiked}>
                    {label}
                </span>
                <span 
                className = "app-list-item-edit"
                onClick = {this.openEditForm}>
                    Edit
                </span>
                <span className = "app-list-item-date">{srv.getDate()}</span>
                <div className = "d-flex justify-content-center align-items-center">
                    <button 
                        type = "button" 
                        className = "btn-star btn-sm"
                        onClick = {onToggleImportant}>                        
                            <i className = "fa fa-star"></i>
                    </button>
                    <button 
                        type = "button" 
                        className = "btn-trash btn-sm"
                        onClick = {this.openModal}>{/*onDelete При клике вызываем функцию, полученную из пропсов*/}
                            <i className = "fa fa-trash-o"></i>
                    </button>
                    <i className = "fa fa-heart"></i>
                </div>

                {/** Форма для редактирования */}
                <form className = "bottom-panel d-flex post-edit-form" onSubmit = { this.confirmChanges}>
                    <input 
                    type = "text"
                    name = "newLabel"
                    className = "form-control new-post-label"
                    //defaultValue = {label}
                    value = {label}
                    onChange = {this.inputChange}
                    />
                    <button
                        type = "submit"
                        className = "btn btn-outline-secondary"
                        >
                        OK</button>
                </form>

                <ConfirmModal onAccept = {onDelete} onCancel = {this.closeModal} opened = {this.state.modal}/>
            </div>
        )
    }
}







/**
 * Эту часть убрали из класса, так как функционал реализуется в App
 * constructor (props) {
        super(props);
        this.state = {
            label: this.props.label,
            important: false,
            like: false,
            form: false,
            modal: false
        }
        this.onImportant = this.onImportant.bind(this); // привяжем метод к экземпляру класса
        this.onLike = this.onLike.bind(this); 
        this.onEdit = this.onEdit.bind(this);
        this.confirmChanges = this.confirmChanges.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    onImportant() {
        // метод срабатывающий при клике на звездочку
        this.setState( ({important}) => ({
            important: !important
        }) )
    }

    onLike() {
        this.setState( ({like}) => ({
            like: !like
        }) )
    }
 */


// Не используем, так как это реализация через функцию и не может содержать state
// // Деструктурируем props
// const PostListItem = ({label, important=false}) => {
//     const srv = new Services();

//     // Все классы нашего элемента записи. let, так как будет изменяться
//     let classNames = 'app-list-item d-flex justify-content-between'; 
//     if(important) {
//         classNames += ' important'  // если получили important то добавляем нужный класс
//     }import ConfirmModal from '../confirmModal/confirmModal';

//     return (
//         <div className = {classNames}>
//             <span className = "app-list-item-label">{label}</span>
//             <span className = "app-list-item-date">{srv.getDate()}</span>
//             <div className = "d-flex justify-content-center align-items-center">
//                 <button type = "button" className = "btn-star btn-sm">
//                     <i className = "fa fa-star"></i>
//                 </button>
//                 <button type = "button" className = "btn-trash btn-sm">
//                     <i className = "fa fa-trash-o"></i>
//                 </button>
//                 <i className = "fa fa-heart"></i>
//             </div>
//         </div>
//     )
// }

//export default PostListItem;