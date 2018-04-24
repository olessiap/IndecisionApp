import React from 'react';
import Option from './Option';

const Options = (props) => {
    return(
        <div>
            <button>Remove All</button>
            <p>List of options</p>
                {
                    props.options.map(option => <Option key={option} optionText={option}/>) 
                }
        </div>
    )
};

export default Options;