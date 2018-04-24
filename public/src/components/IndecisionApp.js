import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import Option from './Option';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    render() {
        const options = ['one', 'two', 'three']
        
        return(
            <div>
                <Header 
                    title="INDECISION APP"
                    subtitle="Put your hands in the life of a computer.."  
                />
                <Action />
                <Options options={options} />
                <Option />
                <AddOption />
             </div>
        );
    }
}