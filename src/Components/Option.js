import { useState } from "react"
let values = [];

function Option(props) {

  function formatArray(){
    console.log("about to format", values, values.length); 
    let string = "";
    for(let i = 0; i < values.length; i++) {
      
      if(i != 0) string += ", "
      
      string += values[i];
    }
    console.log("about to return", string);
    return string;
  }

  function addCheckedValue(){
    console.log("props.secletedValue", props.selectedValue);
    console.log("props.Value", props.value);
    values.push(props.value);
   
    props.setSelectedValue(
      formatArray()
    );
    
  }

  function removeCheckedValue(){
    let newVal = props.selectedValue - ", " - props.value;
    console.log("newval", newVal, typeof newVal !== Number);
    if(typeof newval !== Number) {
      newVal = "";
    }
    props.setSelectedValue(newVal);
  }

  const [clicked, setClicked] = useState(false);
  function onClickHandler(event){
    if(event.type === "click") {
      console.log("clicked!");
      if(!clicked) {
        addCheckedValue()
      }
      else {
        removeCheckedValue()
      }
      setClicked(!clicked)
    }
  } 

  let inputClassName = "input-checkbox"+ (clicked ? " clicked": "");
  console.log("new class name", inputClassName);
  console.log("clicked? ", clicked);


  return (
    <div className="input-option">
      <div className="input-option-checkbox" > {props.multi && <div className={inputClassName} onClick={ onClickHandler }></div>} </div>
      <div className="input-option-value" > {props.value} </div>
    </div>
  );  
}

export default Option;