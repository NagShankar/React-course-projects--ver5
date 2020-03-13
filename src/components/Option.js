import React from "react";

const Option = (props) => {
    
      return(
              <li>
                   {props.optionText}
                   <span> </span>
                   <button 
                            onClick={(e)=>{
                                           props.deleteSingleOption(props.optionText)
                                          }
                                     }
                     >
                     Remove this option</button>
          
              </li>
           );
    
}


export default Option;