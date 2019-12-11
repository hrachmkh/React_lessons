import React from 'react';

import './Filter.css';

const Filter = () => {

    return (
        <div>
            <input className='search' type='text' />
            <button className="btn"><i className='fa fa-search'></i></button>
            <button className='btn1'>Active</button>
            <button className='btn1'>Passive</button>
            <hr/>
        </div>
    );
};

export default Filter;
