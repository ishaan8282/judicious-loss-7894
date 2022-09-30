import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css";
function Footer() {
  return (
<div style={{paddingBottom:"25px"}}>
  <div style={{display:'flex', justifyContent:"space-between", width:"100%", margin:"auto", backgroundColor:"#ffeecc", padding:"200px", paddingBottom:"10px" , paddingTop:"20px", boxSizing:"border-box"}}>
    <Link className={styles.Airgaragelogo}>
                    <img style={{ marginTop:"11px", paddingLeft:"0px" }} src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png" width="150px"/>
                </Link>

                <div>
                   <h3 style={{color:"#fb9361", marginBottom:"20px", marginTop:"none"}}>21st Century Parking Operator</h3> 
                </div>
    </div>  

    <div className={styles.Footer} >

        <div>
        <h3>Company</h3>
            <p>About</p>
            <p>Careers</p>
            <p>FAQ</p>
            <p>Contact Customer Support</p>
            <p>Privacy Policy</p>
        </div>
        <div>
        <h3>Uses</h3>
            <p>Hotels</p>
            <p>Garages</p>
            <p>Surface Lots</p>
            <p>Airports</p>
        </div>
        <div>
        <h3>Features</h3>
            <p>Access Control</p>
            <p>Parking management</p>
            <p>Payment Collection</p>
            <p>Gate arm Alternative</p>
        </div>
        <div>
        <h3>Find Parking</h3>
            <p>on iOS App</p>
            <p>on Android App</p>
            <p>on Web</p>
        </div>
     
    </div>
    
</div>
  )  
}

export default Footer