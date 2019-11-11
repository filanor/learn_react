import React, {Component} from 'react';
import logo from './logo.svg';
import bdWork from './services/bdWork';
import ItemList from './ItemList';
import './App.css';

export default class App extends Сomponent{
  constructor(props){
    super(props);

    this.bd = new bdWork();
  }
  
   getAllCofee();
  
  
  return (
    <ItemList data = {cofee}/>
  );
}

export default App;
