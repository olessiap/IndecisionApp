import React from 'react';

const AddOption = (props) => {
    return(
        <div>
            <form>
                <input type = 'text' name = 'option'></input>
                <button onClick={props.handleAddOption}>Add Option</button>
            </form>
        </div>
    )
}

export default AddOption