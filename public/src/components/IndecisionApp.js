import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import Option from './Option';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    state = {
        options: ["one", "two", "three", "four"],
        header: "original header"
    }
    changeHeaderName = (newHeaderName) => {
        this.setState(() => {
            return { 
                header: newHeaderName
            }
        });
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

    handleAddOption = () => {
        console.log("handleAddOption clicked")
    }
    
    render() {    
        return(
            <div>
                <Header 
                    title={this.state.header}
                    subtitle="Put your hands in the life of a computer.."  
                    changeHeaderLink={this.changeHeaderName}
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