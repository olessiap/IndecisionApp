import React from 'react';

export default class AddOption extends React.Component {
    state = {
        title: "CHANGED TITLE BITCH!"
    }
 
    handleAddOption = (e) => {
        e.preventDefault(); 

        const option = e.target.elements.option.value.trim();
    }
    onChangeTitleLink = () => {
        this.props.changeTitleLink(this.state.title)
    }

    onHandleChange = (event) => {
        event.persist(); 
        this.setState(() => {
            return {
                title: event.target.value
            }
        });    
    }
    render() {
        return(
            <div>
                <input type="text" value={this.state.title} 
                        onChange={(event) => this.onHandleChange(event)} />
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