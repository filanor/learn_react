import React, {Component} from 'react';
import {Button, Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage'
import CharacterPage from '../characterPage';



export default class App extends Component{
    state = {
        randomChar: true,
        error: false
    }

    componentDidCatch(){
        // Отлавливаем ошибки. не обрабатывает ошибки в ассинхронных и собственных методах
        console.log('error');
        this.setState({
            error: true
        })
    }


    toggleRandomChar = () => {
        this.setState({
            randomChar: !this.state.randomChar
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
        const randomChar = this.state.randomChar ? this.showRandomChar() : null;

        if(this.state.error){
            return <ErrorMessage/>
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    
                    {randomChar}
                    <Button onClick = {this.toggleRandomChar}>Toggle Random Character</Button>
                    {/* <Row>
                        <Col md='6'>
                            <ItemList onCharSelected = {this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId = {this.state.selectedChar}/>
                        </Col>
                    </Row> */}
                    <CharacterPage/>
                   
                </Container>
            </>
        );
    }
};

