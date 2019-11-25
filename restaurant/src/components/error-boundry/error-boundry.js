import React, {Component} from 'react';
import Error from '../error';

export default class ErrorBoundry extends Component {

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    render() {
        if(this.state.error) {
            return <Error/>
        }

        // Если нет ошибки, рендерим структуру, которая  находится внутри этого компонента (внутри границы ошибок)
        return this.props.children;
    }
}