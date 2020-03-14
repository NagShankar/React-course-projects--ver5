import React from "react";

//const Action = (props) =>{
//     return(
//            
//            <div>
//               <button onClick={props.sendRandomNum} disabled={!props.hasOptions}>What should i do? Pick random option</button>
//            </div>
//        );
//        
//}



//removing implicit return and rewriting 

const Action = (props) => (
             <div>
               <button onClick={props.sendRandomNum} disabled={!props.hasOptions}>What should i do? Pick random option</button>
            </div>
     );
        

export default Action;