import React from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Search from '../Components/Search';
import StartUp from '../Components/StartUp';


function Startup() {
    return (
        <div>
        <Navbar />           
        <div className="container-fluid">
          <div className="row">
            
            
               <div className="input-group">
                   <input type="text" className="form-control" placeholder="Search for Startup by name or industry"></input>
                   <span className="input-group-btn">
                   <button className="btn btn-default" type="button">
                   <span className="glyphicon glyphicon-search">search</span>
                </button>
                 </span>
              </div>
         
     </div><br></br>
     <StartUp 
     StartUp_name="Anditer"
     img_src="./img/anditer.png"
     StartUp_info="Anditer is a tech blog"
    /> <br></br>
    <StartUp 
     StartUp_name="Tutahub"
     img_src="./img/tutahub.jpg"
     StartUp_info="A Website for Tutorials"
    /><br></br>
    <StartUp 
     StartUp_name="Think and Zoom"
     img_src="./img/thinknzoom_logo.jpg"
     StartUp_info=" Providing solutions for the visually impaired, 
     such as mind-controlled zooming, and wearable controlled zooming"
    /><br></br>
    <StartUp 
     StartUp_name="Slatecube"
     img_src="./img/download.jpg"
     StartUp_info="Slatecube helps job seekers develop job-relevant skills, 
     gain work experience,and land well paying jobs through world-className
      up-skilling courses and virtual internships"
    /> <br></br>
    <StartUp 
     StartUp_name="Sleek Job Academy"
     img_src="./img/sleek.png"
     StartUp_info="Trains world className software developers in Ghana and matches them to employment opportunities"
    /><br></br>
    </div> 
   <Footer />
  </div>
  
   
 )
}

export default Startup;
