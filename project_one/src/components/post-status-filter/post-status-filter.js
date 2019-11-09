import React, {Component} from 'react';
import {Button} from 'reactstrap'
import './post-status-filter.css';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        // Надор используемых кнопок
        this.buttons = [ 
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравившиеся'}
        ]
    }
    render(){

        const buttons = this.buttons.map(({name, label})=>{
            const {filter, onFilterSelect} = this.props
            const active = filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <Button 
                    outline
                    key = {name} 
                    className={`${clazz}`}
                    onClick = {()=>onFilterSelect(name)}>
                        {label}
                </Button> 
            )
        })
        return (
            <div className = "btn-group">
                {buttons}
                {/*<Button color = "info">Все</{Button>
                <Button outline color = "secondary">Понравилось</Button> 
                */}
                {/* До использования reactstrap
                <button type = "button" className = "btn btn-info">Все</button>
                <button type = "button" className = "btn btn-outline-secondary">Понравилось</button>
                */}
            </div>
        )
    }
}

