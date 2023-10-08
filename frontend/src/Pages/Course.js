import Header from "../Components/Header";
import axios from "axios"
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Course()
{
    const[image,setImage]= useState([])

    const getimage =()=>{
        axios.get("http://localhost:5000/images").then((Response)=>{
            setImage(Response.data)
            console.log(Response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getimage()
    },[])
    return(
        <div >
            <Header/>
        
            <div  className="max-w-7xl mx-auto py-16 px-4 sm:py-2 sm:px-6 lg:px-8">
    <div className="text-center mt-20">
        <div className="">
          
            <p className="mt-2 text-3xl font-extrabold  sm:text-2xl   lg:text-4xl">  Courses </p>
            <p className="text-xl mt-5">The Best Course. Learn anytime & anywhere. </p>
        </div>
        </div>
        <div class="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 lg:grid-cols-3 lg:gap-x-6 my-8">

        {

image.map((image, index)=>(

  <Link to={`/${image.enroll}/${image._id}`} >
  <div class=" bg-slate-800  rounded-lg flex flex-col  shadow-md pb-4">
      <img src={image.image} />
      <h1 className="text-center text-2xl text-white pt-8">{image.title}</h1>
<Link to="/Signin"><button  className="bg-emerald-400 py-2 px-2 w-60 ml-10 lg:ml-16 hover:bg-slate-400 my-10 hover:translate-x-2 duration-100  rounded-lg gap-6">  {image.description} </button>  </Link>   
    
      


  </div>
  </Link>
))
}
        </div>
</div>
{/* //foter// */}
<Footer/>

        </div>
    )
}
export default Course;