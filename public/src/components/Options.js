import React from 'react';
import Option from './Option';

const Options = () => {
    const optionsArray = ['one', 'two', 'three']
    return(
        <div>
            <button>Remove All</button>
            <p>List of options</p>
            <ol>
                {
                    optionsArray.map(option => <li key={option}>{option}</li>) 
                }
            </ol>
        </div>
    )
};

export default Options;