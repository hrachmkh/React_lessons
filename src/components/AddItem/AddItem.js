import React from 'react';

import './AddItem.css';

const AppItem = ({addFunc}) => {

    return (
        <div className='adding'>
            <textarea></textarea>
            <button className='add'>+</button>
        </div>
    );
};

export default AppItem;
