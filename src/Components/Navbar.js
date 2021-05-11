import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div >
            <nav className="navbar navbar-default head">
                <div className="container-fluid">
                   <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
                   <span className="icon-bar"></span>
                    </button>
                    <img src="img/logo.png"></img>
            </div>
              <div className={props.class}>
                <ul className="nav navbar-nav navbar-right">
                  <li className={props.homeactive}><Link to="/">Home</Link></li>
                  <li className={props.startupactive}><Link to="/Startup">Startup</Link></li>
                  <li className={props.registeractive}><Link to="/Register">Register</Link></li>
                  <li className={props.loginactive}><Link to="/Login">Login</Link></li>
               </ul>
               </div>
           </div>
         </nav>  
       </div>                 
        
    )
}
export default Navbar;
