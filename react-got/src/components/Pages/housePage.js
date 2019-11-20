import React, {Component} from 'react';
import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import RowBlock from '../rowBlock';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import styled from 'styled-components';

const House = styled.div`
    margin: 0px auto;
    background-color: #ffffff;
    height: 240px
`;


export default class HousePage extends Component{


    gotService = new GotService();
    state = {
        selectedHouse: null, 
        error: false
    }

    onHouseSelected = (id) => {
        this.setState({
            selectedHouse: id
        })
    }

    render(){
        const {selectedHouse, error} = this.state;
        
        if(error){
            return <ErrorMessage status = {error}/>
        }

        const housesList = <ItemList 
                            onItemSelected = {this.onHouseSelected}
                            getData = {this.gotService.getAllHouses}
                            renderItem = {(item) => item.name}
                        />
        const housesDetails =<House>
                                <ItemDetails
                                    getData = {this.gotService.getHouse}
                                    itemId = {selectedHouse}
                                    itemType = 'house'>
                                        <Field field = 'name' label = 'Name'/>
                                        <Field field = 'region' label = 'Region'/>
                                        <Field field = 'words' label = 'Words'/>
                                        
                                </ItemDetails>
                            </House>
        return (
            <RowBlock left = {housesList} right = {housesDetails}/>
        )
    }

}