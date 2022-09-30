import React from 'react'
import Navbar from './Navbar'
import styles from "./Signup.module.css"
function Signup() {
  return (
    <div>
<Navbar/>
<div className={styles.sign}>
        <div className={styles.imgsign}>
            <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ba98799d47da0806a85703_ag-p-500.png" alt="img"/>
        </div>
        <div className={styles.inputsign}>
            <form>
                <label className={styles.name}>Name *</label><br/>
                <input type="text" className={styles.name} placeholder="Name"/><br/>
                <label className={styles.email}>Email *</label><br/>
                <input type="email" className={styles.email} placeholder="Name@email.com"/><br/>
                <label className={styles.number}>Phone Number *</label><br/>
                <input type="text" className={styles.number} placeholder="415-123-4545"/><br/>
                <label className={styles.address}>Parkin alot address *</label><br/>
                <input type="address" className={styles.address} placeholder="1112 Main Street,San Francisco,CA 94110"/><br/>
                <button>Sign up</button>
            </form>
        </div>
    </div>

    </div>
  )
}

export default Signup