import React from "react";
import ReactDOM from "react-dom";

import IndecisionApp from "./components/IndecisionApp"; //OR ./components/IndecisionApp.js

//PROPS.CHILDREN example or THIS.PROPS.CHILDREN example

const Layout = (props) => {
    return(
       <div>
        <h1>Header</h1>
        {props.children}
        <h1>Footer</h1>
        
        </div>
    
    
    );
}

//const template=( //we vould send the JSX inside the component and refer it as props.children
//    <div>
//     <p>Content main</p>
//     <p>lorem ipsum  dolor sit</p>
//    </div>
//)


//ReactDOM.render(
//<Layout content={template}/>,
//document.getElementById('app')
//)

//instead of passing props, we could use props.children and send the JSX along with component itself

ReactDOM.render(
<Layout>
      <div>
         <p>children</p>
         <p>lorem ipsum children dolor sit</p>
    </div>
    </Layout>,
document.getElementById('app')
)


//ReactDOM.render(
//<IndecisionApp />,
//document.getElementById('app')
//)


