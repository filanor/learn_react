import React, {useState, useEffect} from 'react';
//import GotService from '../../services/gotService';
import ErrorMessage from '../errorMessage';
import styled from 'styled-components';
import {ListGroup, ListGroupItem} from 'reactstrap'


const  ItemDetail = styled.div`
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    h4{
        margin-bottom: 20px;
        text-align: center;
    }
    li{
        display: flex;
        background: transparent;
    }
`;
const SelectError = styled.span`
    color: #000;
    display: block;
    margin: auto
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


function ItemDetails({itemId, getData, itemType, children}) {
    
    const [item, updateItem] = useState(itemId);
    const [error, onError] = useState(false);


    useEffect( () => {
        if(!itemId) {
            return
        }
        getData(itemId)
            .then( (item) => {
                updateItem(item);
                
            } )
            .catch( error => {
                onError(error.status);
                
            })
    }, [itemId]);
 

        if(error){
            return <ErrorMessage status = {error}/>
        }

        if(!item) {
            return <SelectError>Please select a {itemType}</SelectError>
        }
        const {name} = item;

        return (
            <ItemDetail className="rounded">
                <h4>{name}</h4>
                <ListGroup flush>
                    {   
                        React.Children.map(children, (child) => {   
                            return React.cloneElement(child, {item})
                        })
                    } 
                 
                </ListGroup>
            </ItemDetail>
        );
    }

export default ItemDetails;