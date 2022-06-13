import {useState, useRef} from 'react'
const { default: Option } = require("./Option");

function DropDown(props){
  const [selectedValue, setSelectedValue] = useState("");
  const [dropped, setDropped] = useState(false);

  function populateMultipleDropDown(){
      let count = 0;
      let classes="";
      if(!dropped) classes="none"; 
      console.log("props!", props)
      
      const ret = props.options.map((option) => {
        return <Option value={option} multi={props.multi} className="input-field" selectedValue={selectedValue} setSelectedValue={setSelectedValue}> {option} </Option>
      });
      return <div className={classes}>{ret}</div>;
  }
  
  function populateSingleDropdown() {
      const content = 
      <div className="input-box">
        <label 
          htmlFor="cars" 
          style={{display: "block"}} 
          className="input-label left">
          {props.label}   
        </label> 
        <select name="cars" id="cars" className="input-field">
          <option value="volvo" className="input-default"> None </option>
          <option value="saab">Twenty</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div> 
      return content; 
  }
  
  function toggleDrop() {
    if(dropped) {
      // is currently dropped
      //document.querySelector('.collapsed-icon').style.transform = 'rotate(0deg)';
      //document.getElementById('input-options').classList.add('none');
      //populateMultipleDropDown();
      setDropped(false);
    }
    else {
      // not dropped. drop it
      //document.querySelector('.collapsed-icon').style.transform = 'rotate(90deg)';
      //document.getElementById('.input-options').classList.add('none');
      populateMultipleDropDown();
      setDropped(true);
    }
  }

  function onClickHandler(event){
    if(event.type === "click") {
      console.log("clicked!");
      
      toggleDrop();
    }
  } 

  //const dropDownItems = populateMultipleDropDown();
  const burger = 
  <div className="selected-item">
    Bixby McBeep
  </div>
  const burger2 = 
  <div className="selected-item">
    Shithead Thomas
  </div>
  const burger3 = 
  <div className="selected-item">
    Tonsil Harding
  </div>
  const burger4 = 
  <div className="selected-item">
    Jane Wacko
  </div>
  return (
    <div className="drop-down">
      <div>
        
          
      <div className="input-parent">
        <div className="border">
          <div className="input-box">
            <label 
              htmlFor="cars" 
              style={{display: "block"}} 
              className="input-label left">
              {props.label}   
            </label>
            <div className="input-field" >
              
                {selectedValue} {burger4} {burger3} {burger} 
                <div className="icon-container">
                  <div className="collapsed-icon" onClick={onClickHandler}></div>
                </div>
            </div>
            
          </div>
        </div>
        <div className="input-options" id="input-options">
          {populateMultipleDropDown()}
          
        </div> 
      </div>
       </div>
       
      </div>
  )
}

export default DropDown;