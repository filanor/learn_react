import React, {Fragment} from 'react';
import styled from 'styled-components';

const ErrPic = styled.img`
    max-width: 100%;
`;



const ErrorMessage = ({status = 0}) => {
    const errDictionary = {
                0: {msg: "Sorry, i'm tired", pic: 'img/error.jpg'},
                404: {msg:'Somethin goes wrong', pic: 'img/error.jpg'}, 
                410: {msg: 'we are broken', pic: 'img/ruins.jpg'},
                408: {msg: 'we waiting too long..', pic:'img/time.jpg'}
            };

    const {msg, pic} = errDictionary[status];
    return(
        <Fragment>
            {/** Допустим нам необходимо подгрузить файл, находящийся в папке pulic. Для этого используется следующая конструкци: */}
            <ErrPic src = {process.env.PUBLIC_URL + pic} alt = 'error'></ErrPic>

            <span>{msg}</span>
        </Fragment>
    );
}

export default ErrorMessage;
