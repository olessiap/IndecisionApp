import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import Option from './Option';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    handlePick() {
        // let randomNum = Math.floor(Math.random) * options.length;
        console.log('handlePick');
    }

    handleRemoveAll() {
        console.log("handleRemoveAll")
    }
    
    render() {
        const options = ['one', 'two', 'three']
        
        return(
            <div>
                <Header 
                    title="INDECISION APP"
                    subtitle="Put your hands in the life of a computer.."  
                />
                <Action handlePick={this.handlePick}/>
                <Options 
                    options={options} 
                    handleRemoveAll={this.handleRemoveAll}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
             </div>
        );
    }
}