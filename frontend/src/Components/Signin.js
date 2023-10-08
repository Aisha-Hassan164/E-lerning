import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, } from "react-router-dom";


function Signin()
{
    const[username,setUsername]=useState("")
    const[password,setPasword]=useState("");
    const Navigate = useNavigate()
    const regtersignin =()=>{
        axios.post("http://localhost:5000/register/login",{
            "username":username,
            "password":password
        }).then((Response)=>{
         

            if(Response.data.username){
                localStorage.setItem("regis",JSON.stringify(Response.data))
                Navigate("/Dashboard")
            }
            else{
                alert("username or password incorect")
            }
        }).catch((error)=>{
            console.log(error)
        })
    }
    return(
        <div className="bg-slate-800 h-2/6">
            <div className="py-12 py-24 px10">
       <div className="p-10 md:w-3/4 lg:w-1/3 mx-auto rounded-md bg-white shadow-2xl  ">
             
       <label  className="text-xl py-6"> Username</label><br/>
            <input type="text" placeholder="enter your username" className="w-full shadow p-4 rounded-md "
                value={username} onChange={(event)=>{
                    setUsername(event.target.value)
                }}
            /><br/>
            <label  className="text-xl py-6"> Password</label><br/>
            <input type="text" placeholder="enter your password" require className="w-full shadow p-4 rounded-md "
             value={password} onChange={(event)=>{
                setPasword(event.target.value)
             }}
            /><br/>

       <Link to="/Dashboard">    <button className="bg-slate-800 text-white shadow-lg py-3 w-full my-4 rounded-lg hover:bg-slate-400" onClick={regtersignin}> SignIn </button></Link>  
         <div className=" flex gap-28">
         <p className=" text-blue "> if you don't have account! </p>
          <h1 className="text-emerald-400" > <a href="/Signup"> Register </a> </h1> 
         </div>
       </div>
       </div>
        </div>
    )
}
export default Signin;