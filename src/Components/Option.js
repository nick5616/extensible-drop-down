import { useState } from "react"
import Tag from "./Tag"
let values = [];

function Option(props) {
  function isNull(val){
    return val === 'undefined';
  }
  function formatArrayWithCommas(){
    console.log("about to format", values, values.length); 
    let string = "";
    for(let i = 0; i < values.length; i++) {
      console.log("about to add", values[i], values[i] === 'undefined');
      if(i != 0) string += ", "
      
      if(values[i] !== 'undefined') string += values[i];
    }
    console.log("about to return", string, string === 'undefined');
    return string === 'undefined' ? "" : string;
  }

  function formatArray(){
    
    const ret = values.map((key, value) => {
      <Tag></Tag>
    })
    console.log("RET", ret);
    return ret;
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
    //delete values[values.indexOf(props.value)];
    //values.filter(isNull);
    values.splice(values.indexOf(props.value), 1);
    console.log("filtered array", values);
    props.setSelectedValue(
      formatArray()
    );
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