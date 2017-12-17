import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';
import axios from 'axios';

class App extends Component {

    state = {}

    componentDidMount() {
        axios.get('https://api.hh.ru/vacancies')
            .then((result) => {
                this.setState({data: result.data})
            }).catch((err) => {
                console.error(err);
                alert('something wrong')
            })
    }

  render() {

      if (!this.state.data) {
          return <h1>Данных еще нет, загружаем...</h1>
      }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div>
              {this.state.data.items.map( (item) => {
                  return <ListItem key={item.id} {...item}/>
              } )}
          </div>
      </div>
    );
  }
}

export default App;
