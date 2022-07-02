import React, { Component } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components//CardList';
import SearchBox from '../components//SearchBox.js';
import '../containers/App.css';

class App extends Component{
    constructor(){
        super();
        this.state={
            robots: [],
            searchField : '',
        }
    }

    onInput = (event)=>{
        this.setState({searchField : event.target.value});
    }

    render(){
        const { robots, searchField } = this.state;
        const filteredCards = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
        })
        return !robots.length ?
        <h1 className='tc'>LOADING!!!</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>ROBOGROUP</h1>
                <SearchBox searchChange={this.onInput}/>
                <Scroll>
                    <CardList robots={filteredCards}/>
                </Scroll>
            </div>
        );
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> this.setState({robots: users}));
    }
}

export default App;