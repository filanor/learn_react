import React, {Component} from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';
import styled from 'styled-components';
import {ListGroup, ListGroupItem} from 'reactstrap'


const  ItemDetail = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4{
        margin-bottom: 20px;
        text-align: center;
    }
    li{
        display: flex;
    }
`;
const SelectError = styled.span`
color: #ffffff
`;


const Field = ({item, field, label}) => {
    return(
        <ListGroupItem className="justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </ListGroupItem>
    )
}

export {
    Field
}


export default class ItemDetails extends Component {
    gotService = new GotService();
    state = {
        item: this.props.itemId,
        loading: true,
        error: false,
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem(); // Всегда стоить делать проверку новых и прошлых пропсов иначе получится бесконечный цикл
        }
    }

    onItemDetailsLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })
    }

    componentDidCatch(){
        this.setState({
            item: null,
            error: true
        })
    }

    updateItem() {
        const {getData, itemId} = this.props;
        if(!itemId) {
            return
        }
        getData(itemId)
        //this.gotService.getCharacter(charId)
            .then( this.onItemDetailsLoaded )
            .catch( error => {this.onError(error.status);})
        //this.foo.bar = 0;
    }

    onError(status){
        this.setState({
            item: null,
            error: status
        })
    }

    render() {
        const {item, error, loading} = this.state;
        const {itemType} = this.props;
        if(error){
            return <ErrorMessage status = {error}/>
        }
        if(!item) {
            return <SelectError>Please select a {itemType}</SelectError>
        }
        //const spinner = loading ? <Spinner/> : null;
        const {name} = item;

        return (
            <ItemDetail className="rounded">
                <h4>{name}</h4>
                <ListGroup flush>
                    {   /**   Перебираем всех детей с помощью втроенной функции map (Дети в данном слючае это Field, 
                     * которые мы передали из characterPage). При переборе  мы берем каждого child и добавляем к нему элемент из 
                     * state. */
                        React.Children.map(this.props.children, (child) => {   
                            return React.cloneElement(child, {item})
                        })
                        //this.props.children
                    } 
                   {/* 
                    this.props.children в компоненты в качестве пропсов можно ередавать другие компоненты


                    Старый вариант. заменен на вариант с React.children 
                   <ListGroupItem className="justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem className="justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </ListGroupItem>
                    */}
                </ListGroup>
            </ItemDetail>
        );
    }
}