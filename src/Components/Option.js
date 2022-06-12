import { useState } from "react"
function Option(props) {

  const [clicked, setClicked] = useState(false);
  function onClickHandler(event){
    if(event.type === "click") {
      console.log("clicked!");
      setClicked(!clicked)
    }
  } 

  let inputClassName = "input-checkbox"+ (clicked ? " clicked": "");
  console.log("new class name", inputClassName);
  console.log("clicked? ", clicked);
  return (
    <div className="input-option" onClick={ onClickHandler }>
      <div className="input-option-checkbox" > {props.multi && <div className={inputClassName} onClick={ onClickHandler }></div>} </div>
      <div className="input-option-value" > {props.value} </div>
    </div>
  );
}

export default Option;