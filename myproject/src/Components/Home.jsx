import React from 'react'
import {Link} from "react-router-dom";
import styles from "./Home.module.css"
import Navbar from './Navbar';
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
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f5d15cb6b7f898a78507_phone_car_app.png" width="200px" />
                </div>
   </div>   
               
          

            <div className={styles.hHBottom}>
                <div className="hHBottomIcon">
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f173b38239bc4f42286ffab_hilton.png" width="110px"/>
                </div>

                <div className="hHBottomIcon">
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a3a18e780fad25095c2c4_marriot.png" width="110px"/>
                </div>

                <div className="hHBottomIcon">
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a4ae59a7668ee5d9410b3_orange-black.png"width="110px"/>
                </div>

                <div className="hHBottomIcon">
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a3b27ece87b7fcf1d725d_hillel.png" width="75px"/>
                </div>

                <div className="hHBottomIcon">
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a4b5437a53c1f71fbac6a_graduate.png" width="80px"/>
                </div>

                <div className="hHBottomIcon">
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d5744413f27896522793e7e_fumc.png" width="100px"/>
                </div>
            
        </div>
        <div className="hMap">
            <h3 className="hMapHeading">Built With Parking Owners, For Parking Owners</h3>

            <div className="hMapDetails"> 

                <div className="hMapDetails-1">
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a79978c06c33e83e665ff_map.gif"/>
                </div>

                <div className="hMapDetails-2">
                    <div className="hMapDetails-2-1">
                        AirGarage serves parking lots and garages owned by various organizations across the United States and Canada including:
                    </div>
                    <div className="hMapDetails-2-2">
                        <div>
                            <a href="municipalities.html">Municipalities</a>
                            <a href="#">Religious Institutions</a>
                            <a href="#">Apartment Complexes</a>
                            <a href="#">Small Businesses</a>
                        </div>
                        <div>
                            <a href="#">Parking Garages</a>
                            <a href="#">Gyms</a>
                            <a href="#">Hotels and Resorts</a>
                            <a href="#">State and National Parks</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="hDemo1">
            <div className="hDemo1-Text">
                Learn how our advanced technology generates more revenue for you than our competitors
            </div>
            <div className="hDemo1-Button">
                <a href="municipalities.html#DemoForm" className="hHMiddle-1-button-1 hDemo1-Button-icon ">
                    Get a Demo
                    <i className='fas fa-arrow-right'></i>
                </a>
            </div>
        </div>

        <div className="hIRevenue">

            <div className="hIRev-1">
                <div>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5db8ae0cebac5e9213588d9f_revenue-graph.png" width="400"/>
                </div>
            </div>

            <div className="hIRev-2">
                <div className="hIRev-2-1">
                    <p>Increase Revenue</p>
                    <div>Owner friendly, full-stack parking management.</div>
                </div>
                <div className="hIRev-2-2">
                    <div className="hIRev-2-2-img">
                        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2937a53c7a2bfb65b7_slider.png" />
                    </div>
                    <div className="hIRev-2-2-details">
                        <p>Dynamic Pricing</p>
                        <div>We analyze market conditions and automatically adjust prices to maximize occupancy.</div>
                    </div>
                </div>
                <div className="hIRev-2-2">
                    <div className="hIRev-2-2-img">
                        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2ad706274a0ef3a1a1_night.png" />
                    </div>
                    <div className="hIRev-2-2-details">
                        <p>Always On Operations</p>
                        <div>Our software-based system doesn't sleep -- no hardware means no downtime for repairs or maintenance.</div>
                    </div>
                </div>
                <div className="hIRev-2-2">
                    <div className="hIRev-2-2-img">
                        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f2957e7c929611df3bb_secure.png" />
                    </div>
                    <div className="hIRev-2-2-details">
                        <p>No Cash, No Leakage</p>
                        <div>Mobile payments means no need for attendants and no cash ever goes missing.</div>
                    </div>
                </div>
                <div className="hIRev-2-2">
                    <div className="hIRev-2-2-img">
                        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1a1f28039ee32a88bdfae6_cover.png" />
                    </div>
                    <div className="hIRev-2-2-details">
                        <p>Transparent Revenue Share</p>
                        <div>No upfront cost. We’ll cover payment processing, enforcement, marketing, & garage operations.</div>
                    </div>
                </div>
            </div>
        </div>


        <div className="hTOperations">
            <div className="hTO-1">
                <div className="hTO-1-1">
                    <div>Transparent Operations</div>
                    <div>
                        We share all of our data with you, so you’re always aware what’s happening on your property.
                    </div>
                </div>
               <div className="hTO-1-2">
                   <div>Reporting & Analytics</div>
                   <div>Forecast occupancy and maximize your revenue with transparent data.</div>
               </div>
               <div className="hTO-1-2">
                   <div>Real Time Updates</div>
                   <div>
                    Your dashboard updates with each parking rental making it easy to know whats happening on your property.
                   </div>
               </div>
               <div className="hTO-1-2">
                   <div>Your Customers Come First</div>
                   <div>Reserve the lot, set aside spaces for guests, offer free customer validation & more.</div>
               </div>
            </div>
            <div className="hTO-2">
                <div>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f176d82faf9c74e758249b6_dashboard.png" width="400"/>
                </div>
            </div>
        </div>

        <div className="hIRevenue hAEnforcement">
            <div className="hIRev-1">
                <div>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d8e56a745d6500e5de20c14_enforced.png" width="435"/>
                </div>
            </div>
            <div className="hIRev-2">
                <div className="hIRev-2-1">
                    <p>Automated Enforcement</p>
                    <div>Ensure every driver pays in full with our multifaceted approach</div>
                </div>
                <div className="hIRev-2-2">
                    <div className="hIRev-2-2-img">
                        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f1746f70e9b2f62828bc0a3_alpr.png"/>
                    </div>
                    <div className="hIRev-2-2-details">
                        <p>LPR Cameras</p>
                        <div>Every vehicle is scanned upon entry by cameras mounted at each access point.</div>
                    </div>
                </div>
                <div className="hIRev-2-2">
                    <div className="hIRev-2-2-img">
                        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f177034af74df8b86413b9e_tow.png"/>
                    </div>
                    <div className="hIRev-2-2-details">
                        <p>Local Partners</p>
                        <div>Top-rated local companies provide additional enforcement at peak times & remove violators.</div>
                    </div>
                </div>
                <div className="hIRev-2-2">
                    <div className="hIRev-2-2-img">
                        <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5f17467d93b9a169c1bc99cb_spaceforce.png" />
                    </div>
                    <div className="hIRev-2-2-details">
                        <p>Space Force</p>
                        <div>Drivers are incentivized to catch & report violators directly through our app, providing constant, random license plate scanning.</div>
                    </div>
                </div>
            </div>
        </div>


        <div className="hTOperations hMPayments">
            <div className="hTO-1">
                <div className="hTO-1-1">
                    <div>Mobile Payments, 100% Contactless</div>
                    <div>
                        Payment takes less than 15 seconds on average, and can be done via app or over the web.                    
                    </div>
                </div>
               <div className="hTO-1-2 hMP-1-2">
                   <div>Perfectly Accurate Payments</div>
                   <div>Customers are charged for the exact amount of time they park resulting in increased customer satisfaction and increased long term revenue.</div>
               </div>
               <div className="hTO-1-2 hMP-1-2">
                   <div>No Faulty Equipment</div>
                   <div>
                    No paper tickets to refill, no broken gates, no repairs, no downtime.
                   </div>
               </div>
               <div className="hTO-1-2 hMP-1-2">
                   <div>LPR Cameras Included for Parking Garages</div>
                   <div>Rentals are automatically started & ended for repeat customers based on their license plate being scanned when they enter and exit the garage.</div>
               </div>
            </div>
            <div className="hMP-2">
                <div>
                    <img src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d5b136cbbd41f000200acc4_app.png" width="270"/>
                </div>
            </div>
        </div>


        <div className="hDemo-2">
            <div className="hDemo2-Text">
                Learn about our progressive violation
                management and enforcement            
            </div>
            <div className="hDemo2-Button">
                <a href="municipalities.html#DemoForm" className="hHMiddle-1-button-1 hDemo2-Button-icon">
                    Get a Demo
                    <i className='fas fa-arrow-right'></i>
                </a>
            </div>
        </div>

        

  {/* end         */}
       </div>       
     
            )
          }     

   
export default Home ;
