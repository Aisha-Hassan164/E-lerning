import axios from "axios";
import { useState } from "react"
import {  useNavigate } from "react-router-dom";


function Signup()
{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[username,setUsername]=useState("");
    const[password,setPasword]=useState("");
    const[phone,setPhone]=useState("");
    const Navigate = useNavigate()

    const regterpost = ()=>{
        axios.post("http://localhost:5000/regis",{
            "name":name,
            "email":email,
            "username":username,
            "password":password,
            "phone":phone
        }).then((Response)=>{
            console.log("datebase has been insert")
            alert("datebase has been inserted")
            Navigate("/Signin")
        }).catch((error)=>{
            console.log(error)
        })
    }
    return(
        <div className=" bg-slate-800 h-2/6 ">
        <div >
            <h1 className=" text-center mt-2 text-3xl font-extrabold  sm:text-2xl   lg:text-4xl p-4 text-white"> Registration </h1>
        </div>
        <div className=" py-24 px-10 ">
        <div class="p-10 md:w-3/4 lg:w-1/3 mx-auto rounded-md bg-white shadow-2xl py-12 ">
            <label className="text-xl p-2"> Name</label><br/>
            <input type="text" placeholder="enter your name" className="w-full shadow p-4 rounded-md " 
                value={name} onChange={(event)=>{
                    setName(event.target.value)
                }}
            /><br/>
            <label  className="text-xl py-6"> Email</label><br/>
            <input type="email" placeholder="enter your email"  className="w-full shadow p-4 rounded-"
                 value={email} onChange={(event)=>{
                    setEmail(event.target.value)
                 }}
            /><br/>
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
            <label  className="text-xl py-6"> Phone</label><br/>
            <input type="text" placeholder="enter your phone" className="w-full shadow p-4 rounded-md l"
                value={phone} onChange={(event)=>{
                    setPhone(event.target.value)
                }}
            /><br/>
            <button className="bg-slate-800 text-white shadow-lg py-3 w-full my-4 rounded-lg hover:bg-slate-400" onClick={regterpost}> Registration </button>

        </div>
        </div>
      </div>
    )
}export default Signup