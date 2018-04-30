import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import Option from './Option';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    state = {
        options: ["one", "two", "three", "four"]
    }
    
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const randomOption = this.state.options[randomNum];
        alert(randomOption);
    }

    handleRemoveAll = () => {
        this.setState(()  => {
            return {
                options: []
            }
        });
    }
    handleAddOption = (option) => {
        if(!option) {
            return "Option can't be blank"
            //indexOf returns option index and -1 if not there
        } else if(this.state.options.indexOf(option) > -1) { 
             return "Option alredy entered"
        }
        
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
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
                <Action 
                    handlePick={this.handlePick}
                    hasOptions={this.state.options.length > 0}
                />
                <Options 
                    options={this.state.options} 
                    handleRemoveAll={this.handleRemoveAll}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
             </div>
        );
    }
}