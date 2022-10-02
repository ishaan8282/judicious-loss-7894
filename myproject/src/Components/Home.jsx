import React from 'react'
import {Link} from "react-router-dom";
import styles from "./Home.module.css"
import Navbar from './Navbar';
import Footer from "./Footer"
function Home() {
  return (
  <div>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={styles.TopHome}>
    <div className={styles.hHMiddle_1}>
                    <h1 className={styles.hHMiddle_1_heading_1}>A parking operator built for the 21st century</h1>
                    <p  className={styles.hHMiddle_1_heading_2}>AirGarage has solutions for all parking owners - enforcement, payment collection, visitor registration, customer support, and more.</p>
                    <Link to="municipalities.html#DemoForm" className= {styles.hHMiddle_1_button_1}>
                        Get a demo
                        <i className='fas fa_arrow_right'></i>
                    </Link>
                   
               </div>
               <div className={styles.hHMiddle_2}>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/60ba98799d47da0806a85703_ag-p-500.png" width="200px" />
                </div>
   </div>   
               
          

            <div className={styles.hHBottom}>
                <div className={styles.hHBottomIcon}>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f173b38239bc4f42286ffab_hilton.png" width="110px"/>
                </div>

                <div className={styles.hHBottomIcon}>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a3a18e780fad25095c2c4_marriot.png" width="110px"/>
                </div>

                <div className={styles.hHBottomIcon}>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a4ae59a7668ee5d9410b3_orange-black.png"width="110px"/>
                </div>

                <div className={styles.hHBottomIcon}>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a3b27ece87b7fcf1d725d_hillel.png" width="75px"/>
                </div>

                <div className={styles.hHBottomIcon}>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a4b5437a53c1f71fbac6a_graduate.png" width="80px"/>
                </div>

                <div className={styles.hHBottomIcon}>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d5744413f27896522793e7e_fumc.png" width="100px"/>
                </div>
            
        </div>
        <div className={styles.hMap}>
            <h3 className={styles.hMapHeading}>Built With Parking Owners, For Parking Owners</h3>

            <div className={styles.hMapDetails}> 

                <div className={styles.hMapDetails_1}>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a79978c06c33e83e665ff_map.gif"/>
                </div>

                <div className={styles.hMapDetails_2}>
                    <div className={styles.hMapDetails_2_1}>
                        AirGarage serves parking lots and garages owned by various organizations across the United States and Canada including:
                    </div>
                    <div className={styles.hMapDetails_2_2}>
                        <div>
                            <Link to="municipalities.html">Municipalities</Link>
                            <Link to="#">Religious Institutions</Link>
                            <Link to="#">Apartment Complexes</Link>
                            <Link to="#">Small Businesses</Link>
                        </div>
                        <div>
                            <Link to="#">Parking Garages</Link>
                            <Link to="#">Gyms</Link>
                            <Link to="#">Hotels and Resorts</Link>
                            <Link to="#">State and National Parks</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.hDemo1}>
            <div className={styles.hDemo1_Text}>
                Learn how our advanced technology generates more revenue for you than our competitors
            </div>
            <div className={styles.hDemo1_Button}>
                 <Link to="municipalities.html#DemoForm" className= {styles.hHMiddle_1_button_1}>
                        Get a demo
                        <i className='fas fa_arrow_right'></i>
                    </Link>
            </div>
        </div>

        <div className={styles.hIRevenue}>

            <div className={styles.hIRev_1}>
                <div>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5db8ae0cebac5e9213588d9f_revenue-graph.png" width="400"/>
                </div>
            </div>

            <div className={styles.hIRev_2}>
                <div className={styles.hIRev_2_1}>
                    <p>Increase Revenue</p>
                    <div>Owner friendly, full-stack parking management.</div>
                </div>
                <div className={styles.hIRev_2_2}>
                    <div className={styles.hIRev_2_2_img}>
                        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2937a53c7a2bfb65b7_slider.png" />
                    </div>
                    <div className={styles.hIRev_2_2_details}>
                        <p>Dynamic Pricing</p>
                        <div>We analyze market conditions and automatically adjust prices to maximize occupancy.</div>
                    </div>
                </div>
                <div className={styles.hIRev_2_2}>
                    <div className={styles.hIRev_2_2_img}>
                        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2ad706274a0ef3a1a1_night.png" />
                    </div>
                    <div className={styles.hIRev_2_2_details}>
                        <p>Always On Operations</p>
                        <div>Our software-based system doesn't sleep -- no hardware means no downtime for repairs or maintenance.</div>
                    </div>
                </div>
                <div className={styles.hIRev_2_2}>
                    <div className={styles.hIRev_2_2_img}>
                        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2957e7c929611df3bb_secure.png" />
                    </div>
                    <div className={styles.hIRev_2_2_details}>
                        <p>No Cash, No Leakage</p>
                        <div>Mobile payments means no need for attendants and no cash ever goes missing.</div>
                    </div>
                </div>
                <div className={styles.hIRev_2_2}>
                    <div className={styles.hIRev_2_2_img}>
                        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f28039ee32a88bdfae6_cover.png" />
                    </div>
                    <div className={styles.hIRev_2_2_details}>
                        <p>Transparent Revenue Share</p>
                        <div>No upfront cost. We’ll cover payment processing, enforcement, marketing, & garage operations.</div>
                    </div>
                </div>
            </div>
        </div>


        <div className={styles.hTOperations}>
            <div className={styles.hTO_1}>
                <div className={styles.hTO_1_1}>
                    <div>Transparent Operations</div>
                    <div>
                        We share all of our data with you, so you’re always aware what’s happening on your property.
                    </div>
                </div>
               <div className={styles.hTO_1_2}>
                   <div>Reporting & Analytics</div>
                   <div>Forecast occupancy and maximize your revenue with transparent data.</div>
               </div>
               <div className={styles.hTO_1_2}>
                   <div>Real Time Updates</div>
                   <div>
                    Your dashboard updates with each parking rental making it easy to know whats happening on your property.
                   </div>
               </div>
               <div className={styles.hTO_1_2}>
                   <div>Your Customers Come First</div>
                   <div>Reserve the lot, set aside spaces for guests, offer free customer validation & more.</div>
               </div>
            </div>
            <div className={styles.hTO_2}>
                <div>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f176d82faf9c74e758249b6_dashboard.png" width="400"/>
                </div>
            </div>
        </div>
        <div className={styles.Autmated_Enforcement} >
        <div className={styles.hIRevenue_hAEnforcement}>
            <div className={styles.hIRev_1}>
                <div>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d8e56a745d6500e5de20c14_enforced.png" width="435"/>
                </div>
            </div>
        
        </div>
        
            <div className={styles.hIRev_2}>
                <div className={styles.hIRev_2_1}>
                    <p>Automated Enforcement</p>
                    <div>Ensure every driver pays in full with our multifaceted approach</div>
                </div>
                <div className={styles.hIRev_2_2}>
                    <div className={styles.hIRev_2_2_img}>
                        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1746f70e9b2f62828bc0a3_alpr.png"/>
                    </div>
                    <div className={styles.hIRev_2_2_details}>
                        <p>LPR Cameras</p>
                        <div>Every vehicle is scanned upon entry by cameras mounted at each access point.</div>
                    </div>
                </div>
                <div className={styles.hIRev_2_2}>
                    <div className={styles.hIRev_2_2_img}>
                        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f177034af74df8b86413b9e_tow.png"/>
                    </div>
                    <div className={styles.hIRev_2_2_details}>
                        <p>Local Partners</p>
                        <div>Top-rated local companies provide additional enforcement at peak times & remove violators.</div>
                    </div>
                </div>
                <div className={styles.hIRev_2_2}>
                    <div className={styles.hIRev_2_2_img}>
                        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f17467d93b9a169c1bc99cb_spaceforce.png" />
                    </div>
                    <div className={styles.hIRev_2_2_details}>
                        <p>Space Force</p>
                        <div>Drivers are incentivized to catch & report violators directly through our app, providing constant, random license plate scanning.</div>
                    </div>
                </div>
            </div>
            </div>


        <div className={styles.hTOperations_hMPayments}>
        <div className={styles.hTO_1}>
                <div className={styles.hTO_1_1}>
                    <div>Payment Operations</div>
                    <div>
                        We share all of our data with you, so you’re always aware what’s happening on your property.
                    </div>
                </div>
               <div className={styles.hTO_1_2}>
                   <div>Reporting & Analytics</div>
                   <div>Forecast occupancy and maximize your revenue with transparent data.</div>
               </div>
               <div className={styles.hTO_1_2}>
                   <div>Real Time Updates</div>
                   <div>
                    Your dashboard updates with each parking rental making it easy to know whats happening on your property.
                   </div>
               </div>
               <div className={styles.hTO_1_2}>
                   <div>Your Customers Come First</div>
                   <div>Reserve the lot, set aside spaces for guests, offer free customer validation & more.</div>
               </div>
            </div>
            <div className={styles.hMP_2}>
                <div>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d5b136cbbd41f000200acc4_app.png" width="270"/>
                </div>
            </div>
        </div>


        <div className={styles.hDemo_2}>
            <div className={styles.hDemo2_Text}>
                Learn about our progressive violation
                management and enforcement            
            </div>
            <div className={styles.hDemo2_Button}>
            <Link to="municipalities.html#DemoForm" className= {styles.hHMiddle_1_button_1}>
                        Get a demo
                        <i className='fas fa_arrow_right'></i>
                    </Link>
            </div>
        </div>


        <Footer/>

  {/* end         */}
       </div>       
     
            )
          }     

   
export default Home ;
