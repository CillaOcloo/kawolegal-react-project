import React from 'react'
import Navbar from '../Components/Navbar';
import InputField from '../Components/InputField';
import Button from '../Components/Button';
import Footer from '../Components/Footer';

function Register() {
    return (
        <div>
           <Navbar />
            <div className="container">
   	            <div className="row">
                   <h3>Join Kawolegal. Sign up to get your Startup listed now!</h3>
                     <div className="fm1">
                         <form>
                             <InputField label_name="Name" type="text" placeholder="Name"/>
                             <InputField label_name="Email" type="text" placeholder="Email"/>
                             <InputField label_name="Password" type="password" placeholder="Password"/>
                             <InputField label_name="Password" type="Password" placeholder="Confirm Password"/>
                             <Button name="sign up"/>
                         </form>
                     </div>
   		         </div>
             </div>
             <Footer />
        </div>
    )
}

export default Register;
