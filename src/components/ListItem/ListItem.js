import React from 'react';

import './ListItem.css';

const ListItem = ({list}) => {
    const color = list.isDone ? "#999" : 'orange';
    const styleData = {color:color};
    return (
        <li>  
            <input type="checkbox"/>
            <span style={styleData}>{list.title}</span>
            <button>Delete</button>
        </li>
    );
};

export default ListItem;
