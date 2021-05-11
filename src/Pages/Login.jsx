import React from 'react'
import Navbar from '../Components/Navbar';
import InputField from '../Components/InputField';
import Button from '../Components/Button';
import Footer from '../Components/Footer';


function Login() {
    return (
        <div>
            <Navbar /> 
             <div className="container">
   	            <div className="row">
   		          <h3>Already a Member? Login to add Startups</h3>
                     <div className="fm1">
                         <form>
                             <InputField label_name="Name" type="text" placeholder="name"/>
                             <InputField label_name="Password" type="password" placeholder="password"/>
                             <Button name="login"/>
                         </form>
                     </div>
   		         </div>
             </div>
             <Footer />
           </div>
    )
}
export default Login;
