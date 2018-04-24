import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import Option from './Option';

export default class IndecisionApp extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Action />
                <Options />
                <Option />
             </div>
        );
    }
}