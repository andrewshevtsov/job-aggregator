import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ListItem from './ListItem';

class App extends Component {

    state = {
        data: {
            items: []
        },
        isListLoading: false
    }

    page = 0;

    onListScroll = (e) => {
        const SCROLLDIV = e.currentTarget;
        console.log(`
                Высота блока:${SCROLLDIV.clientHeight}
                Высота контента:${SCROLLDIV.scrollHeight}
                Насколько юзер проскроллил:${SCROLLDIV.scrollTop}
                Высота блока + насколько юзер проскроллил:${SCROLLDIV.clientHeight + SCROLLDIV.scrollTop}
                Сделать запрос, когда второе и четвёртое значения будут равны
            `);

        if (SCROLLDIV.scrollHeight <= SCROLLDIV.clientHeight + SCROLLDIV.scrollTop + 20) {
            this.getDataFromAPI();
        }
    }

    getDataFromAPI = () => {
        if (!this.state.isListLoading) {
            this.setState({isListLoading: true});
            fetch( `https://api.hh.ru/vacancies?page=${this.page}&per_page=50` )
                .then(res => res.json())
                .then((result) => {
                    console.log(result);
                    this.setState({data: {
                        items: this.state.data.items.concat(result.items)}
                    })
                    this.setState({isListLoading: false})
                this.page++;
            }).catch((err) => {
                    console.error(err);
                    alert('something wrong');
                })
            }
        }

    componentDidMount() {
        this.getDataFromAPI();
    }

    render() {
        if (!this.state.data) {
            return <h1>Данных еще нет, загружаем...</h1>
        }
        return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">React sample job parser</h1>
            </header>
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
