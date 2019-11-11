import React, {Component} from 'react';
import logo from './logo.svg';
import bdWork from './services/bdWork';
import ItemList from './ItemList';
import './App.css';

export default class App() extends Сomponent{
  const bd = new bdWork();
  const cofee = bd.getAllCofee();
  
  
  return (
    <ItemList data = {cofee}/>
  );
}

export default App;
