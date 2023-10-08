import { useEffect, useState } from "react";
import Dashboard from "../Components/Dashboard";
import axios from "axios";
import Header from "../Components/Header";
function Javascvideo()
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
         <Header/>
        <Dashboard/>
         <div className="ml-52">
         <div className=" text-2xl bg-slate-800 text-white h-40 text-center pt-10">
  <h1 className="text-6xl">HTML & CSS Course</h1>
</div>
          {
            videos.map((vidoo, index)=>(
            <div className=" max-w-none">

               <iframe  >
               <source src={vidoo.video}/>
              </iframe>
              <video className="mw-fit h-fit">
              <iframe src={`${vidoo.video} `} className="max-w-fit h-fit" >  </iframe>
              </video>
               </div>
            ))

          }
        </div>
       </div>
    )
}
export default Javascvideo;