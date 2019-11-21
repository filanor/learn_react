import React, {useState, useEffect} from 'react';
import Spinner from '../spinner/';
import ErrorMessage from '../errorMessage';
import {ListGroupItem} from 'reactstrap';
import styled from 'styled-components';


const ItemsBlock = styled.ul`
    li{
        cursor: pointer;
    }
`

function ItemList({getData, onItemSelected, renderItem}) {
    
    //state заменяем на 
    const [itemList, updateList] = useState([]);
    const [error, onError] = useState(false);

    // componentDidMount заменяем на
    useEffect( ()=> {
        getData()
            .then( (data) => {
                updateList(data)
            })
            .catch( (error) => {onError(error.status)});
    }, []);
 


    // function onError(status){
    //         error = status;
    // }

    // раньше был методом класса, теперь просто функция внутри функции 
    function renderItems(arr) {
        return arr.map( (item, i) => {
            const {id} = item
            const label = renderItem(item)
            return(
                <ListGroupItem
                    key = {id}
                    onClick = {() => onItemSelected(id)}>
                        {label}
                </ListGroupItem>
            )
        })
    }

    // Раньше мыл метод render(). убрали его и теперб код этого метода просто код функции ItemList
    // также убрали деструктуризацию state для получения error, itemList, так как они у нас сейчас и так содержатся в
    // переменных (за счет useState )

    if(error){
        return <ErrorMessage status = {error}/>
    }

    if(!itemList){
        return <Spinner/>
    }

    const items = renderItems(itemList)

    return (
        <ItemsBlock className="list-group">
            {items}
        </ItemsBlock>
    );
}

export default ItemList;