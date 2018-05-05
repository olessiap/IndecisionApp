import React from 'react';


const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button 
                //allows option text to be selected instead of the Event Object
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
            Delete
            </button>
        </div>
    )
}

export default Option;