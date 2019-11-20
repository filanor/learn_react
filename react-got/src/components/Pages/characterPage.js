import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage'
import RowBlock from '../rowBlock';
import styled from 'styled-components';

const Char = styled.div`
    margin: 0px auto;
    background-color: #ffffff;);
    height: 240px
`;



export default class CharacterPage extends Component{
    gotService = new GotService();
    state = {
        selectedChar: 130, 
        error: false
    }
    onCharacterSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch(){
        this.setState({
            error: true
        })
    }


    render(){
        if(this.state.error){
            return <ErrorMessage/>
        }

        const itemList = <ItemList 
                            onItemSelected = {this.onCharacterSelected}
                            getData = {this.gotService.getAllCharacters } 
                            renderItem = {(item) => item.name} />;
        const charDetails = <Char>
                                <ItemDetails 
                                    itemId = {this.state.selectedChar}
                                    getData = {this.gotService.getCharacter}
                                    itemType = 'character'>
                                        <Field field = 'gender' label = 'Gender'/>
                                        <Field field = 'born' label = 'Born'/>
                                        <Field field = 'died' label = 'Died'/>
                                        <Field field = 'culture' label = 'Culture'/>
                                </ItemDetails>
                            </Char>   ;

        return(
            <RowBlock left = {itemList} right = {charDetails}/>
            /* Старый вариант. Rомпоненты (ItemList и CharDetail)вынесли в отдельные переменные (выше), 
            а для верстки сделали компонент RowBlock и вынесли его в отдельную папку
            <Row>
                <Col md='6'>
                    {itemList}
                    
                    <ItemList  
                        onCharSelected = {this.onCharSelected}
                        getData = {this.gotService.getAllCharacters } // Передаем функцию получчения персонажей (так мы сделаем ItemList более независимым)
                        renderItem = {(item) => item.name} // Передаем render функцию, 
                        />   
                    
                </Col>
                <Col md='6'>
                    {charDetails}
                    {/** 
                    <CharDetails charId = {this.state.selectedChar}/>
                    
                </Col>
            </Row>
            */
        );
    }
}