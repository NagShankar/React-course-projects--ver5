import React from "react";

const Header = (props) => {
    return (
            <div>
                <h1>{props.title}</h1> 
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        ); 
    
}

//default props are objects and specific to a component
Header.defaultProps={
     title:"Indecision Application"
}

export default Header;