import React, {Component} from 'react';
import bdWork from '../services/bdWork';
import ItemList from './ItemList';
//import './App.css';

export default class App extends Component{
  constructor(props){
    super(props);
  }
  
  render() {
    return (
      <div>
        <ItemList type = "coffee"/>
        <ItemList type = "goods"/>
        <ItemList type = "bestsellers"/>
      </div>
    );
  }
  
  
}
