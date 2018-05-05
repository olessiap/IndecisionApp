import React from 'react';
import Option from './Option';

const Options = (props) => {
    return(
        <div>
            <button 
                onClick={props.handleDeleteOptions}>Remove All</button>
            <p>List of options</p>
                {
                    props.options.map(option => (
                        <Option 
                            key={option} 
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    )) 
                }
        </div>
    )
};

export default Options;