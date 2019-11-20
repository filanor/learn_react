import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import RandomChar from '../randomChar';

const Index = styled.div`
    color: #fff;
    text-align: center;
    h2{
        display: block;
        text-align: center;
        margin-bottom: 40px;
    }
    button{
       display: block;
    }
`; 

const IndexPage = () => {
    return(
        <Index>
            <h2>Hello on GoTDB page :)</h2>
            <RandomChar/>
        </Index>
    )
}

export default IndexPage;