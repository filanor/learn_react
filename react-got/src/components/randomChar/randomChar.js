import React, {Component, Fragment} from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import {Button, ListGroup, ListGroupItem, Col, Row} from 'reactstrap';
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import PropTypes from 'prop-types';

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px; 
    margin-bottom: 40px;
    border-radius: 0.25rem !important;
    color: #000000;
    h4{
        margin-bottom: 20px;
        text-align: center;
    }
    li{
        display: flex;
        justify-content: space-between !important;
    }import ErrorBoundary from '../errorMessage/errorMessage';

`

export default class RandomChar extends Component {
    // constructor(){
    //     super();
    //     this.updateChar();
    //     this.temerId = setInterval(this.updateChar, 1500) // обновление рандомного персонажа каждые 1.5 секунды (так как здесь используем контекст
    //     // вызова, необходимо updateChar сделать стрелочной)
        
    //     console.log('constructor')
    // }

    state = {
        char: {},
        loading: true,
        error: false,
        errorStatus: '',
        visible: true
    }

    static defaultProps = {
        updInterval: 10000,
    }

    gotService = new GotService();

    componentDidMount() {
        this.updateChar();
        this.temerId = setInterval(this.updateChar, this.props.updInterval) 
    }

    componentWillUnmount() {
        clearInterval(this.timerId); 
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            errorStatus: ''
        })
    }

    onError = (status) => {
        this.setState({
            error: true,
            errorStatus: status,
            loading: false
        })
    }

    updateChar = () => {
        const id = 'c_' + Math.floor(Math.random() * 140 + 25); // рандомный id персонажа ()
        this.gotService.getCharacter(id) // возвращает промис
            .then( this.onCharLoaded )
            .catch((error) => {
                this.onError(error.status);});
    }


    toggleRandomChar = () => {
        this.setState({
            visible: !this.state.visible
        });
    }
    showRandomChar = () => {
        return(
            <Row>
                <Col lg={{size: 5, offset: 0}}>
                    <RandomChar/>
                </Col>
            </Row> 
        )
    }

    render() {
        console.log(this.state.char);
        const {char, loading, error, errorStatus, visible} = this.state;

        if(!visible){
            return <Button onClick = {this.toggleRandomChar}>Toggle Random Character</Button>
        }
        
        const errorMessage = error ? <ErrorMessage status = {errorStatus}/> : null;
         // Если статуc loadin, то в переменной spinner будет загрузочный блок, иначе 0
        const spinner = loading ? <Spinner/> : null;

        const content = !(loading || errorMessage) ? <View char = {char}/> : null;       
        

        return (
            <Fragment>
                <Button onClick = {this.toggleRandomChar}>Toggle Random Character</Button>
                <Row>
                <Col lg={{size: 5, offset: 0}}>
                <RandomBlock>
                    {errorMessage}
                    {spinner}
                    {content}
                </RandomBlock>
               
                </Col>
            </Row> 
            </Fragment>
        );
    }
}

// Устанавливаем props по умолчанию для интервала обновления. Теперь мы можем передать его из другого компонента, либо будет
// использоваться этот: 
//RandomChar.defaultProps = {
//   interval: 10000,
//}

// Проверка типа с использованием библиотеки prop-types (без нее в lesson11/lsn11_theory)
RandomChar.propTypes = {
    interval: PropTypes.number
}


const View = ({char}) => {
    
    const {name, gender, born, died, culture} = char;
    return (
        <Fragment>
                <h4>Random Character: {name}</h4>
                <ListGroup flush>
                    <ListGroupItem>
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </ListGroupItem>
                    <ListGroupItem>
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </ListGroupItem>
                </ListGroup>
            
        </Fragment>
    );
}