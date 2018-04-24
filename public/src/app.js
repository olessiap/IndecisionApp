import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
    
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/* 
COMPONENTS: 
    IndecisionApp - handler functions, local storage stuff 
    Header
    Action - What should I do button3
    Options - use Option to display options, delete all button
    Option - individual option + delete button
    AddOption - form input
    OptionModal

ERRORS/CONDITIONALS
    option can't be blank
    option can't be entered twice
    "what should I do" button should be disabled if no options entered
        if options length is less than 1 disable the button

*/