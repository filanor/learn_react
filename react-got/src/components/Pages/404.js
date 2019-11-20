import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const PageNotFound = styled.div`
    color: #fff;
    text-align: center;
    a{
        display: block;
        margin: 100px auto;
        width: 150px;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        background-color: #d6d6d6;
    }
`; 

const BadPage = () => {
    return(
        <PageNotFound>
            <h3>Page not Found :( </h3>

            <Link to = '/'> Go to Main</Link>
        </PageNotFound>
    )
}

export default BadPage;