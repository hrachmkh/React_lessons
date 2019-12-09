import React from 'react';

import Filter from '../Filter';
import List from '../List';
import AddItem from '../AddItem';

const data = [
    {
        id:1,
        title: 'List 1',
        isDone: true
    },
    {
        id:2,
        title: 'List 2',
        isDone: false
    },
    {
        id:3,
        title: 'List 3',
        isDone: false
    }
];


const App = () => {

    return (
        <>
            <h1>My ToDo List</h1>
            <Filter />
            <List />
            <AddItem />
        </>
        
    );
};

export default App;