import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOption = (e) => {
        e.preventDefault(); 

        const option = e.target.elements.option.value.trim();
       
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {error}
        });
    }
    //error message returns only of it exists bc
    //if no error returns undefined and that's falsy value
    render() {
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
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