import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BookPage, HousePage} from '../Pages';
import GotService from '../../services/gotService';





export default class App extends Component{
    gotService = new GotService();
    state = {
        error: false
    }

    componentDidCatch(){
        // Отлавливаем ошибки. не обрабатывает ошибки в ассинхронных и собственных методах

        this.setState({
            error: true
        })
    }




    render() {

        if(this.state.error){
            return <ErrorMessage/>
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <RandomChar/>
                    {/* {randomChar} */}
                    {/* <Button onClick = {this.toggleRandomChar}>Toggle Random Character</Button> */}
                    {/* <Row>
                        <Col md='6'>
                            <ItemList onCharSelected = {this.onCharSelected}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId = {this.state.selectedChar}/>
                        </Col>
                    </Row> */}
                    <CharacterPage/>

                    <BookPage/>
                    <HousePage/>


                    {/* <Row>
                        <Col md='6'>
                            <ItemList 
                                onItemSelected = {this.onItemSelected}
                                getData = {this.gotService.getAllBooks}
                                renderItem = {(item) => item.name} />
                        </Col> 
                        <Col md='6'>
                            <ItemDetails itemId = {this.state.selectedChar}>
                                <Field field = 'numberOfPages' label = 'NumberOfPages'/>
                                <Field field = 'released' label = 'Released'/>
                                <Field field = 'dpublisheried' label = 'Publisher'/>
                            </ItemDetails>
                        </Col>
                    </Row> 
                    <Row>
                        <Col md='6'>
                            <ItemList onItemSelected = {this.onItemSelected}
                                getData = {this.gotService.getAllHouses } 
                                renderItem = {(item) => (
                                    <Fragment>
                                        <span>{item.name}</span>
                                        <button>Click Me</button>
                                    </Fragment>
                                )}/>
                        </Col>
                        <Col md='6'>
                            <ItemDetails itemId = {this.state.selectedChar}/>
                        </Col>
                    </Row>*/}
                   
                </Container>
            </>
        );
    }
};

