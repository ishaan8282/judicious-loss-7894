import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import styles from "./FindParking.module.css"

function FindParking() {
  return (
    <div>
       <div className={styles.find_parking_main}>
<div className={styles.parking_header}>
  <Link to="/">
<img className={styles.airgarage_img} src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png"/>
</Link>
</div>
<div className={styles.find_parking_heading}>
    <h2>Find Parking</h2>
    <p>100s of spots available near you.</p>
</div>
<div className={styles.location_type}>
<div>LOCATION</div>
<div style={{marginLeft:"60px"}}>TYPE</div>

</div>
<div className={styles.location_down}>
 
    <input className={styles.address_txt} placeholder="Enter Location.."></input>
 
    <div style={{border:"none"}}>
       
        <select className={styles.select} >
         
           <option>Monthly</option>
           <option>Hourly</option>
           <option>Airport</option>
        
    </select>
</div>
   <Button className={styles.search_txt}>SEARCH </Button>
</div>
<div className={styles.popular_search}> 
    <h4>Popular Searches</h4>
</div>
<div className={styles.hollywood_pic}>
<div><img src="https://parking.airgara.ge/static/media/hollywood.3cda80f5.png"/>
<h1>Los Angeles</h1>
<p>15 spots available</p>
</div>
<div><img src="https://parking.airgara.ge/static/media/omaha.47180892.png"/>
    <h1>Omaha</h1>
    <p>14 spots available</p>
</div>
<div><img src="https://parking.airgara.ge/static/media/a2.29e68f98.png"/>
    <h1>Ann Arbor</h1>
    <p>12 spots available</p>
</div>
<div><img src="https://parking.airgara.ge/static/media/cacti.0300cb19.png"/>
    <h1>Tempe</h1>
    <p>21 spots available</p>
</div>
</div>
<div className={styles.parking_footer}>
<div>©2021 AirGarage, Inc</div>
<div className={styles.homepage_term_contact}>
    <div>Homepage</div>
    <div>Terms</div>
    <div>Contact Us</div>
</div>
</div>
    </div>
    </div>
  )
}

export default FindParking