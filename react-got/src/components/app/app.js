import React, {Component} from 'react';
import {Button, Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';



export default class App extends Component{
    state = {
        randomChar: true
    }

    toggleRandomChar = () => {
        this.setState({
            randomChar: !this.state.randomChar
        });
        console.log(this.state.randomChar)
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
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    
                    {randomChar}
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                    <Button onClick = {this.toggleRandomChar}>Toggle Random Character</Button>
                </Container>
            </>
        );
    }
};

