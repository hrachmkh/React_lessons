import React from 'react';
import ListItem from '../ListItem';

import './List.css';

const List = ({todoData}) => {
    const lists = todoData.map((l) =>{
        return <ListItem key={l.id} list={l} />
    });
    return (
        <div>
            <p>Tasks to do</p>
            <ul className="list">
                {lists}
            </ul>
            </div>
    );
};

export default List;
