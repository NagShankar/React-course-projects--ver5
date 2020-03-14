import React from "react";
//import ReactDOM from "react-dom";
import Modal from "react-modal";

//const OptionModal = () => {
//   return (
//      <div>
//         some dummy text
//        </div>
//   ); 
//    
//}

//OR.................... shortened by removing implicit return, we can do this when the function not doing anything else but just returning only

Modal.setAppElement('#app');

const OptionModal = (props) => (
      //<div>some dummy text from modal to test</div>
       <Modal
          isOpen={!!props.sendingSelectedOption}
          onRequestClose={props.closingModal}
          contentLabel="Example Modal -  Seleced Option"
        >
             <h5>Selected Option</h5>
             { props.sendingSelectedOption && <p>{props.sendingSelectedOption}</p> }
    <button onClick={props.closingModal}>Okay</button>
        
     </Modal>
   ); 
    



export default OptionModal;