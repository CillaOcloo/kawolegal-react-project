import React from 'react'

function InputField(props) {
    return (
        <div>
        <div className="form-group">
               <label>{props.label_name}</label>
              <input type={props.type} className="form-control"  placeholder={props.placeholder}></input>

             
        </div>
        
            
        </div>
    )
}

export default InputField;
