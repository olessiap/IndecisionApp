import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import Option from './Option';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    state = {
        options: ["one", "two"]
    }
    
    handlePick() {
        // let randomNum = Math.floor(Math.random) * options.length;
        console.log('handlePick');
    }

    handleRemoveAll = () => {
        this.setState(()  => {
            return {
                options: []
            }
        });
    }
    
    render() {    
        return(
            <div>
                <Header 
                    title="INDECISION APP"
                    subtitle="Put your hands in the life of a computer.."  
                />
                <Action hasOptions={this.state.options.length > 0}/>
                <Options 
                    options={this.state.options} 
                    handleRemoveAll={this.handleRemoveAll}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
             </div>
        );
    }
}