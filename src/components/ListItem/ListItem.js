import React from 'react';

import './ListItem.css';

const ListItem = () => {

    return (
        <li>
            <input type="checkbox"/>
            <input type="text" value="Read the article"></input>
            <button>Delete</button>
        </li>
    );
};

export default ListItem;
