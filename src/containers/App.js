import React, { useState, useEffect } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components//CardList';
import SearchBox from '../components//SearchBox.js';
import '../containers/App.css';
//useEffect lets us hook to a feature of react where we deal with lifecycle methods
//useState does the same for state variables

function App() {

    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState(''); // set to initial state

    const onInput = (event)=>{
        setSearchField(event.target.value);
    }

    useEffect(()=>{ //runs everytime function App runs
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users=> {setRobots(users)});
    }, []) //renders only once, initially bcoz we have not given any arguments

    const filteredCards = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    })
    return !robots.length ?
        <h1 className='tc'>LOADING!!!</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>ROBOGROUP</h1>
                <SearchBox searchChange={onInput}/>
                <Scroll>
                    <CardList robots={filteredCards}/>
                </Scroll>
            </div>
        );
}

export default App;