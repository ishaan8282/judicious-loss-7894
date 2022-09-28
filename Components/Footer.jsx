import React from 'react'
import styles from "./Footer.module.css";
function Footer() {
  return (
<div>
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
    <hr style={{width:"70%", 
        color:"#fc8e59",
     fontSize:"20px"}} />
</div>
  )  
}

export default Footer