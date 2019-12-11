import React from 'react';

import Filter from '../Filter';
import List from '../List';
import AddItem from '../AddItem';

import './App.css';

const data = [
    {
        id:1,
        title: 'Read the article',
        isDone: true
    },
    {
        id:2,
        title: 'Go to the GYM',
        isDone: false
    },
    {
        id:3,
        title: 'Do the lessons',
        isDone: false
    }
];

const addNewItem = (title) => {
    const obj = {
        id: data[data.length -1].id +1,
        isDone:false,
        title
    }
    data.push(obj);
}

const App = () => {

    return (
        <div className='content'>
            <h1>My ToDo List</h1>
            <Filter />
            <div className='row marginTopBottom'>
                <List todoData={data}/>
            </div>
            <AddItem addFunc={addNewItem}/>
        </div>
        
    );
};

export default App;