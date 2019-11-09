import React from 'react';
import styled from 'styled-components';
import Services from '../../services/services'
import './app-header.css';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'block'}
        :hover {
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPosts}) => {
    const srv = new Services();
    return (
        <Header colored>
            <h1>Filippov Anton</h1>
            <h2>{allPosts} {srv.recorEnd(allPosts)}, из них понравилось {liked}</h2>
        </Header>
    )
}

export default AppHeader;