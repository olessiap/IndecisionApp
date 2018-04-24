import React from 'react';

export default class AddOption extends React.Component {
    handleAddOption = (e) => {
        e.preventDefault(); 

        const option = e.target.elements.option.value.trim();

        if(option) {
            alert(option);
        }
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type = 'text' name = 'option' />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }  
}

/* 
handleAddOption 
    e as a parameter bc need to know what the event is
    e.preventDefault() - no fullpage refresh on submit
    grab the option value - e.target.elements.option.value
    if option exists -> send an alert with the value 
 */