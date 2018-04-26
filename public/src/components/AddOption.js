import React from 'react';

export default class AddOption extends React.Component {
    state = {
        title: "CHANGED TITLE BITCH!"
    }
 
    handleAddOption = (e) => {
        e.preventDefault(); 

        const option = e.target.elements.option.value.trim();

        // if(option) {
        //     this.state.options.push(option);
        // }
    }
    onChangeTitleLink = () => {
        this.props.changeTitleLink(this.state.title)
    }
    render() {
        return(
            <div>
                <button onClick={this.onChangeTitleLink}>change Title</button>
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
    if option exists -> add the option to the options array
 */