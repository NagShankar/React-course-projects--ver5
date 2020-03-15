import React from "react";

class AddOption extends React.Component{
    
    state={
       error:undefined  
    }
    
    //using constructor here since we're using props inside addOption method and we need to bind this
//    constructor(props){
//        super(props);
//        this.addOption=this.addOption.bind(this);
//        
//          //receiving error
//                //        this.state={
//                //            error:undefined   //by default its undefined, in other words false
//                //        }
//        
//    }
//    

    addOption = (e) => { //converted to arrow function syntax
       
        e.preventDefault();
        
        //console.log(testingggggggg); //for source map testing
        
        const option=e.target.elements.option.value.trim();//trimming out empty spaces
        
        const whatsTheOutput=this.props.addingOption(option);
        
        //setting error, if any
        this.setState(()=>({error:whatsTheOutput}));
        
        if(!whatsTheOutput){
            e.target.elements.option.value='';//emptying the input box if there is no error like duplicate submit or no values
          }
        

    };

//remove error on input box empty
 removeError= (e) => {
    if(e.target.value===""){
     this.setState(()=>({error:undefined}));  
    }
     
 }
 
 
    render(){
        
        return (
          <div>
            <form onSubmit={this.addOption}>
                <input type="text" name="option" onChange={this.removeError}/>
                 <button>Add Options</button>
            </form>
            {/* this will display only if there's an error*/}
             {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
        
    }
    
}


export default AddOption;