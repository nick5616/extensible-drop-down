import {useState} from 'react'
const { default: Option } = require("./Option");

function DropDown(props){
  const [selectedValue, setSelectedValue] = useState("");
  
  function populateMultipleDropDown(){
      let count = 0;
      console.log("props!", props)
      
      const ret = props.options.map((option) => {
        return <Option value={option} multi={props.multi} className="input-field" selectedValue={selectedValue} setSelectedValue={setSelectedValue}> {option} </Option>
      });
      return ret;
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
  
  
  const bilgur = populateMultipleDropDown();
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
        <div className="input-box">
          <label 
            htmlFor="cars" 
            style={{display: "block"}} 
            className="input-label left">
            {props.label}   
          </label>
          <div className="input-field" >
            {selectedValue}
          </div>
          <div></div>
        </div>
        <div className="input-options" >
          {bilgur}
        </div> 
      </div>
       </div>
       
      </div>
  )
}

export default DropDown;