import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import Option from './Option';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    state = {
        options: ["one", "two", "three", "four"],
        title: "original title"
    }
    changeTitleName = (newTitleName) => {
        this.setState(() => {
            return { 
                title: newTitleName
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
                    title={this.state.title}
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
                <AddOption 
                    handleAddOption={this.handleAddOption}
                    changeTitleLink={this.changeTitleName}
                    />
             </div>
        );
    }
}