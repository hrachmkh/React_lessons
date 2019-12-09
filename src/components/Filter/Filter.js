import React from 'react';

import './Filter.css';

const Filter = () => {

    return (
        <div>
            <input type='text' />
            <button><i className='fa fa-search'></i></button>
            <button>Active</button>
            <button>Passive</button>
        </div>
    );
};

export default Filter;
