import React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const Loginform=()=>{
   
   // to validate given data from user
   const schema = yup.object().shape({
      email: yup.string().email().required("pleace enter your email"),
      password: yup.string().required("pleace enter password"),
    })
        const {register,
        handleSubmit,
        formState:{errors},
           } = useForm({ 
         resolver:yupResolver(schema),
       });

        const [userinput,setusertinput]=
        useState(
       {
        email:"",
        password:""
       });

      //Default value
      const userdetails=[{
      "email":"nold278@gmail.com",
      "password":"123"
        }] 
   
        const Handlesubmitformatch=(e)=>{
           // e.preventDefault();
        console.log(userinput)
     
        // TO change array to string
        console.log("type:::",typeof(userinput.name))
        const email=userinput.email.toString()
        console.log(email)
        const password=userinput.password.toString()

        
       var CryptoJS = require("crypto-js");
   
       // Encrypt
       var ciphertext = CryptoJS.AES.encrypt(email,'secret key 123').toString();
        
       // Decrypt
       var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
       var givenemail = bytes.toString(CryptoJS.enc.Utf8);
       
        console.log(givenemail); 
       // Encrypt
       var ciphertext = CryptoJS.AES.encrypt(password,'secret key 123').toString();
        
       // Decrypt
      var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
      console.log(bytes)
      var givenpassword = bytes.toString(CryptoJS.enc.Utf8);
      console.log(givenpassword); 
      
       // To match Data for login 
        userdetails.map(data=>{
         if(data.email==givenemail && data.password==givenpassword){
            alert("match")
         }else{
            alert("not match")
         }
        })
        }
       
      // TO get user input and set it in userinput
      const handlechange=(e)=>{
      setusertinput({
        ...userinput,
        [e.target.name]:[e.target.value],
       })
       console.log(userinput.name)
      }

      //to show or hide password
      const [passwordtype,setpasswordtype]=useState("password")
      const Changetype=()=>{
      if(passwordtype==="password"){
         setpasswordtype("text")
      }else{
         setpasswordtype("password")
      }
      }
    

    return(
     
     
        <div className=" bg-white h-screen   flex flex-col  justify-center items-center sm: overflow-scroll"> 
            <div className=" w-[600px] h-[500px] overflow-scroll  text-stone-500 font-sans bg-blue-900 text-gray-200 ">
    
            <div className="bg-white rounded-md shadow-lg relative">
                 <form onSubmit={handleSubmit(Handlesubmitformatch)}>
                 <div className=" bg-white w-[400px] h-96 absolute top-10 left-[90px]  p-2 m-2">
                 <ul className="style:none">
                 <div className="text-center text-xl text-blue-800  flex flex-col  justify-center items-center space-y-[30px]  ">
                 <h1 className="text-5xl">NOKIA</h1>
                 </div>
                 <br></br>
                 <div className="h-[100px]">
                 <input {...register("email")} type="text" value={userinput.name} onChange={handlechange} name="email" placeholder="Email" className="p-2  m-2 w-4/5 border font-bold text-gray-500 rounded-md"></input>
                 <p className="text-red-500 pl-7 space-y-[10px]">{errors.email?.message}</p>
                 </div>
                 <div>
                 <input {...register("password")}type={passwordtype} value={userinput.password} onChange={handlechange} name="password" placeholder="password"  className="p-2 m-2 w-4/5 border text-gray-500 rounded-md"></input>
                 <i onClick={Changetype} className="cursor-pointer absolute top-[195px] left-[290px] ">{passwordtype==="password"?< VisibilityOffIcon/>:<VisibilityIcon/>}</i>
                 <p className="text-red-500 pl-7 space-y-[10px]">{errors.password?.message}</p>
                 </div>
                 <div className="absolute bottom-[50px]">
                 <p className="text-right">Forgot password ?</p>
                 <br></br>
                 <button type="submit"   className="bg-blue-900 w-[380px] h-[30px]  rounded-lg">SUBMIT</button>
                 </div>
                 </ul>
                 </div>
                 </form>
            </div>
              
            </div>
        </div>
    )
};

export default Loginform;