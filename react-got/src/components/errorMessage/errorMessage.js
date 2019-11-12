import React, {Fragment, Component} from 'react';
import styled from 'styled-components';

const ErrPic = styled.img`
    max-width: 100%;
`;

// export default class ErrorBoundary extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             error: false,
//         }
//     }
//     static getDerivedStateFromError(error) {
//         return {error: true}
//     }
    
    
//     render() {
//         if (this.state.error) {
//             return(  
//                 <div>
//                     { <ErrPic src = {process.env.PUBLIC_URL + 'img/error.jpg'} alt = 'error'></ErrPic> }

//                     <span>Somethin goes wrong</span>
//                 </div>          
//             );
//         }
//         return this.props.children;
//     }
// }

const ErrorMessage = ({status}) => {
    const errDictionary = {
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
