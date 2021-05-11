import React from 'react'

function StartUp(props) {
    return (
        <div>
            <div className="row">
               <div className="col-md-3 images">
                  <img src={props.img_src} alt="..." /> 
               </div> <br></br><hr></hr>
              <div className="col-md-9">
                  <h1 className="objt">{props.StartUp_name}</h1>
                     <div className="information"><p>{props.StartUp_info}</p></div>
                     <br></br>
                    <button type="button" className="btn btn-primary submit">See full details</button>
                </div>    
            </div>
        </div>
        
    
    )
}

export default StartUp;
