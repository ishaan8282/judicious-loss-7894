import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"
function Navbar() {
  return (
    <div>
         <div className={styles.NavContainer}>
        <div >
        <div className={styles.logo}>
          <Link  style={{ display:"flex",  height:"100px",
         width:"200px",justifyContent:"center", alignItems:"center"}}to="/"><img width="150px" src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png" alt="" /></Link></div>
        <div className={styles.InsideNav}>
    
    <div>
       <Link style={{textDecoration:"none",
        color:  "#282828",
        fontSize: "12px",
        fontWeight: 800,
        letterSpacing: ".14em",
        lineHeight: "24px",
        padding : "5px",
        boxSizing:"border-box"
      }} to="/FindParking"><p>Find Parking</p></Link> 

</div>

<div>
<Link style={{textDecoration:"none",
        color:  "#282828",
        fontSize: "12px",
        fontWeight: 800,
        letterSpacing: ".14em",
        lineHeight: "24px",
        padding : "5px",
        boxSizing:"border-box"
      }} 
        to="/Login"> <p>Log in </p> </Link>
</div>

<div>
        <Link style={{textDecoration:"none",
        color:  "#282828",
        fontSize: "12px",
        fontWeight: 800,
        letterSpacing: ".14em",
        lineHeight: "24px",
       
       
        
      }} 
        to="/Contact"> <p>Contact Customer Support </p> </Link>
</div>

<div>
        <button>Talk To Sales</button>
</div>     
        </div>
    </div>
   </div></div>
  )
}

export default Navbar