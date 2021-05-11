import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Home() {
    return (
        <div>
			<div className="view">
            
		      <div className="full-bg-img flex-center">
			  <Navbar />
	            <div className="container container-flex">
		           <div className="col-md-3"></div>
		              <div className="col-md-6"></div>
			              <p></p>
			                 <h1 className="header">KAWOLEGAL</h1>
			                    <h3 className="sub">A collabrative ecosystem for problem<br></br> solvers and supports for startups</h3>
								<p className="reg">
			                     <button type="button"    className="btn btn-primary"  data-toggle="button" aria-pressed="false">
			                          <h5>Register Now</h5>
			                            </button>
										</p>
		                        
	                               </div> 
                               </div>
                           </div> 
						<Footer />  
					  </div>  
  
    )
}

export default Home;