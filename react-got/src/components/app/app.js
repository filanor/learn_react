import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Header from '../header';
import ErrorMessage from '../errorMessage';
import {CharacterPage, BooksPage, HousePage, BookItem, BadPage, IndexPage} from '../Pages';
import GotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';


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
            <Router>
                <div className = 'app'> 
                    <Container>
                        <Header />
                    </Container>
                    <Container>
                        
                        <Route exact path = '/' component = {IndexPage}/>
                        <Route path = '/characters' component = {CharacterPage}/>
                        <Route path = '/houses' component = {HousePage}/>
                        <Route path = '/books' exact component = {BooksPage}/>
                        <Route path = '/books/:id' render = {
                            ({match}) => {
                                const {id} = match.params;
                                return <BookItem bookId = {+id}/>
                            }
                        }/>
                        {/* <Route component = {BadPage}/> */}
                        {/* <CharacterPage/>
                        <BookPage/>
                        <HousePage/> */}
                    </Container>
                </div>
            </Router>

                    // {/* {randomChar} */}
                    // {/* <Button onClick = {this.toggleRandomChar}>Toggle Random Character</Button> */}
                    // {/* <Row>
                    //     <Col md='6'>
                    //         <ItemList onCharSelected = {this.onCharSelected}/>
                    //     </Col>
                    //     <Col md='6'>
                    //         <CharDetails charId = {this.state.selectedChar}/>
                    //     </Col>
                    // </Row> */}

                    // {/* <Row>
                    //     <Col md='6'>
                    //         <ItemList 
                    //             onItemSelected = {this.onItemSelected}
                    //             getData = {this.gotService.getAllBooks}
                    //             renderItem = {(item) => item.name} />
                    //     </Col> 
                    //     <Col md='6'>
                    //         <ItemDetails itemId = {this.state.selectedChar}>
                    //             <Field field = 'numberOfPages' label = 'NumberOfPages'/>
                    //             <Field field = 'released' label = 'Released'/>
                    //             <Field field = 'dpublisheried' label = 'Publisher'/>
                    //         </ItemDetails>
                    //     </Col>
                    // </Row> 
                    // <Row>
                    //     <Col md='6'>
                    //         <ItemList onItemSelected = {this.onItemSelected}
                    //             getData = {this.gotService.getAllHouses } 
                    //             renderItem = {(item) => (
                    //                 <Fragment>
                    //                     <span>{item.name}</span>
                    //                     <button>Click Me</button>
                    //                 </Fragment>
                    //             )}/>
                    //     </Col>
                    //     <Col md='6'>
                    //         <ItemDetails itemId = {this.state.selectedChar}/>
                    //     </Col>
                    // </Row>*/}
        );
    }
};

