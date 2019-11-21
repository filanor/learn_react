import React, {useState} from 'react';
import styled from 'styled-components';
import RandomChar from '../randomChar';
import {Button} from 'reactstrap';

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

function IndexPage(){
    const [random, toggleRandom] = useState(true);
    
    function toggleRandomChar() {
        toggleRandom(!random);
    }

    if(!random) {
        return <Button onClick = {toggleRandomChar}>Toggle Random Character</Button>;
    }
    return(
        <Index>
            <h2>Hello on GoTDB page :)</h2>
            <Button onClick = {toggleRandomChar}>Toggle Random Character</Button>;
            <RandomChar/>
        </Index>
    )
}

export default IndexPage;