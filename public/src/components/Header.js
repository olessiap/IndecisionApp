import React from 'react';

const Header  = () => {
    const title = "Indecision App!";
    const subtitle = "Put your hands in the life of a computer";
    return(
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
}

export default Header;