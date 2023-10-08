import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";
import Header from "../Components/Header";
function HTML()
{
   const[ videos ,setVideo] = useState([]);

   const videoget =()=>{
     axios.get("http://localhost:5000/dasha").then((Response)=>{
      setVideo(Response.data)
     }).catch((error)=>{
      console.log(error)
     })
   }
   useEffect(()=>{
      videoget()
   },[])
    return(
       <div>
      
        <Dashboard/>
         <div className="ml-52">
         {/* <div className=" text-2xl bg-slate-800 text-white h-40 text-center pt-10">
  <h1 className="text-6xl">HTML & CSS Course</h1>
</div> */}
          {
            videos.map((vidoo, index)=>(
            <div className=" w-full">

               <iframe >
               <source src={vidoo.video}/>
              </iframe>
              <iframe  className="video"   src={`${vidoo.video} `} >  </iframe>
             
               </div>
            ))

          }
        </div>
       </div>
    )
}
export default HTML;