import { useState } from "react"
import {AiOutlineMenu} from "react-icons/ai"
import {AiOutlineClose} from "react-icons/ai"
import {Link} from "react-router-dom"
function Header()
{
    const[menu ,setMenu]=useState(true);

    const user = localStorage.getItem("regis")
    return(
        <body >
       <div  className=" flex  items-center justify-between bg-slate-700 p-6 ">
       <div >
           <h1 className="text-4xl text-white"> Maan-kaab</h1>
       </div>
       <div className="hidden md:flex gap-10 text-white text-2xl ">
       <h1>  <Link to="/"> Home</Link></h1>
       <h1>  <Link to="/About"> About</Link></h1>
       <h1>  <Link to="/Course"> Course</Link></h1>
       <h1>  <Link to="/Email"> Contact</Link></h1>
       </div>
       <dv className="hidden md:flex gap-6  text-xl text-white ">
       
        { user ? <h1>  < Link to="/">{JSON.parse(user).username} </Link> </h1>  : 
        
        <> <button className="bg-emerald-400 py-2 px-6 w-30 rounded-lg gap-6"><Link to="/Signin">sign in</Link> </button><button className="bg-white text-black py-2 px-6 w-30 rounded-lg"> <Link to="/Signup">sign up</Link> </button></>
      
    }  
   
        </dv>
       


{/* ///nav mobile// */}
<div className={`fixed top-0 z-50 bg-emerald-400 w-60 h-screen shadow-2xl 
 ${menu ? "right-0" : "right-[-100%]"} md:hidden flex flex-col gap-10 space-y-10 pt-20 text-xl duration-100 `} >
        <div  > 
        <h1 className="p-6 ">  <Link to="/"> Home</Link></h1>
       <h1 className="p-6">  <Link to="/About"> About</Link></h1>
       <h1 className="p-6">  <Link to="/Course"> Course</Link></h1>
       <h1 className="p-6">  <Link to="/Email"> Contact</Link></h1>
       </div>
       <dv className="hidden md:flex gap-6  text-xl text-white ">
        <button className="bg-emerald-400 py-2 px-6 w-30 rounded-lg gap-6"> <Link to="/Signin">sign in</Link> </button>
        <button className="bg-white text-black py-2 px-6 w-30 rounded-lg"> <Link to="/Signup">sign up</Link></button>
       </dv>
        </div>
             
       {/* //togalbutton// */}
      <div className="text-4xl md:hidden z-50 text-white ">
      <div className="h-7 cursor-pionter" onClick={()=> setMenu(!menu)}>
        {
            menu ?(
                <AiOutlineClose className="h-7"/>
            ):
            (
                <AiOutlineMenu/>
            )
        }
       
       </div>
      </div>
       </div>

        </body>
    )
}

export default Header