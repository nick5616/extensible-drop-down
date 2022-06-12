function DropDown(props){
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
            <select name="cars" id="cars" className="input-field">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
       </div>
       
      </div>
  )
}

export default DropDown;