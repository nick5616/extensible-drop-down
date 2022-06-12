const { default: Option } = require("./Option");

function DropDown(props){

  function populateMultipleDropDown(){
      let count = 0;
      console.log("props!", props)
      const bilgur = props.options.map((option) => {
        return <Option value={option} multi={props.multi} className="input-field"> {option} </Option>
      });
      const content = 
      <div className="input-parent">
        <div className="input-box">
          <label 
            htmlFor="cars" 
            style={{display: "block"}} 
            className="input-label left">
            {props.label}   
          </label>
          <div className="input-field">
            {props.options[0]}
          </div>
          <div></div>
        </div>
        <div className="input-options">
          {bilgur}
        </div> 
      </div>
      return content; 
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

  return (
    <div className="drop-down">
      <div>
        
          
        {props.multi ? populateMultipleDropDown() : populateSingleDropdown()}
       </div>
       
      </div>
  )
}

export default DropDown;