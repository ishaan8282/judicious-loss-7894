import Navbar from './Navbar';
import React from 'react'
import styles from "./Login.module.css";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@chakra-ui/react'
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';
function Login() {

  const [values,setValues] = useState({
    email:"",
    password:""
  });
  
  const navigate = useNavigate();
  const {loginUser} = useContext(AppContext)


  const handleChange = (e) => {
    e.preventDefault();
    const {name,value} = e.target;
    // console.log(name.value)

    setValues ({
      ...values,
      [name] : value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then((res) => res.json())
      .then((res) => {
        alert("success");
        console.log("token", res.token);
        loginUser(res.token);
        navigate("/");
      });

  }



  // const submitForm = (e) => {
  //   e.preventDefault();

  //   const newUser = {email:email,password:password};

  //   setallUser([...allUser,newUser])
  //   console.log(allUser)
  // }
  return (
    <div>
     
     <Navbar/>
     <br />
     <br />
     <br />
     <br/>

      <div className={styles.loginMain}>
        
         <img style={{objectfit:"cover"}} src="https://dashboard.airgarage.com/static/media/money_machine.b5d474b0.png" alt="" />
        

       
          
          <div className={styles.logindiv}>
          <img  src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5d55f8a49a649a59aab64b1c_airgarage-logo.png" width="200px"/>
          <div className={styles.loginWith} style={{width:"40%", padding:"10px", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", boxSizing:"border-box", marginBottom:"60px", margin:"auto", marginTop:"20px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5AvPJ_t72_pkXu7lGnKo0Qva4z9UHpTVYQ&usqp=CAU"  width="50px" />
            <p style={{fontSize:"20px"}}>Sign in with Google</p>
         </div>
         <div style={{marginBottom:"-60px", marginTop:"-20px"}}>
         <label style={{fontSize:"25px", fontWeight:"bold"}}>Log in to AirGarage</label><br/>
                <label><Link to="/signup" style={{ontSize:"25px", fontWeight:"bold"}} onClick="/signup">   Or
                    signup</Link></label><br/> <br/>
          </div>
          {/* <div style={{width:"70%", margin:"Auto"}}> */}
         <form action="" onSubmit={handleSubmit}>

          <div className={styles.EmailAndPass}>
            
             <input
              type="text" 
              name ="email" 
              placeholder='Email'
          value={values.email}
          onChange={handleChange} 
          /> </div> <br /> 
          <div className={styles.EmailAndPass}> 
           <input 
           type="password"
            name="password" 
             placeholder="Password" 
             value={values.password}
             onChange={handleChange}/> </div> <br /> <br />
        <Link to="/"><button onClick={() => alert("Welcome to AirGarage")}  type="submit">LOGIN</button></Link>
         </form>
       
       
         {/* </div> */}
        
          <div  style={{width:"60%", margin:"auto"}} className={styles.loginWith}>
            {/* <img src="data:image/png;base64,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"  width="50px" />
            <p style={{fontSize:"20px"}}> Sign in with Apple </p> */}
         </div> <br />
       </div>
      
    </div>

    </div>
  )
}

export default Login


