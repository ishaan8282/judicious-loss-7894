import React from 'react'
import styles from "./Footer.module.css";
function Footer() {
  return (
<div>
  <div style={{display:'flex', justifyContent:"space-between", width:"70%", margin:"auto", backgroundColor:"#ffeecc", padding:"20px", boxSizing:"border-box"}}>
  <div className={styles.Airgaragelogo}>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png" width="150px"/>
                </div>

                <div>
                   <h3 style={{color:"#fb9361", marginBottom:"20px", marginTop:"none"}}>21st Century Parking Operator</h3> 
                </div>
    </div>  

    <div className={styles.Footer} >

        <div>
        <h3>Product</h3>
            <p>Plans & Pricing</p>
            <p>Integrations</p>
            <p>Product Updates</p>
            <p>Slack Bot</p>
            <p>Microsoft Teams</p>
        </div>
        <div>
        <h3>Features</h3>
            <p>Online Timesheet For Efficient Companies</p>
            <p>Time Tracker for every business</p>
            <p>Reports for billing and payroll to reduce administrative work</p>
            <p>Attendance tracker for every business</p>
            <p>Project Management Time Tracking Software</p>
        </div>
        <div>
        <h3>Apps</h3>
            <p>Web App</p>
            <p>Time Tracker app for Mac</p>
            <p>Time Tracker for Windows</p>
            <p>iPhone app</p>
            <p>Android app</p>
        </div>
        <div>
        <h3>Company</h3>
            <p>About Us</p>
            <p>Blog</p>
            <p>Media kit</p>
            <p>Privacy Policy</p>
            <p>DMCA Policy</p>
        </div>
     
    </div>
    
</div>
  )  
}

export default Footer