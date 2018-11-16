import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

class App extends Component {

    state = {
        data: {
            items: []
        },
        isListLoading: false
    }

    page = 0

    onListScroll = (e) => {
        const scrollDiv = e.currentTarget
        console.log(`scrollDiv.clientHeight:${scrollDiv.clientHeight}
                     scrollDiv.scrollHeight:${scrollDiv.scrollHeight}
                     scrollDiv.scrollTop:${scrollDiv.scrollTop}
                     scrollDiv.clientHeight + scrollDiv.scrollTop:${scrollDiv.clientHeight + scrollDiv.scrollTop}`)

        if (scrollDiv.scrollHeight <= scrollDiv.clientHeight + scrollDiv.scrollTop + 20) {
            this.getDataFromAPI()
        }
    }

    getDataFromAPI = () => {
        if(!this.state.isListLoading) {
            this.setState({isListLoading: true})
            fetch(`https://api.hh.ru/vacancies?page=${this.page}&per_page=50`)
                .then(res => res.json())
                .then((result) => {
                    console.log(result)
                    this.setState({data: {
                        items: this.state.data.items.concat(result.items)}
                      })
                    this.setState({isListLoading: false})
                this.page++
            }).catch((err) => {
                this.setState({isListLoading: false})
                console.error(err);
                alert('something wrong')
                })
            }
        }

    componentDidMount() {
        this.getDataFromAPI()
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
          <div className="list_container">
              <div className={'list_wrapper'} onScroll={this.onListScroll}>
                  {this.state.data.items.map( (item) => {
                      return <ListItem key={item.id} {...item}/>
                  } )}
              </div>
          </div>
      </div>
    );
  }
}

export default App;
