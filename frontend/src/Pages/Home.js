
import { Link } from "react-router-dom";
import Header from "../Components/Header";
// import Images from "../Images/download.jpeg"

import axios from "axios"
import { useEffect, useState } from "react";
import Footer from "./Footer";
import {AiOutlineArrowRight} from "react-icons/ai"
import {AiOutlineArrowLeft} from "react-icons/ai"




function Home ()
{
  //  const regis  = ()=>{

  //   <h1> { JSON.parse( regis).username} </h1>
  //  }


///couress//

const[image,setImage]=useState([])

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

///course//

    return(
        <div>
            <Header/>
       <main className> 
       <div className="bg-slate-800  ms: h-96 ">
       {/* <img src={Images}alt="hero" className="h-96 w-full"/> */}
            <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40 ">
                
              
            </div>
          <div className=" absolute	top-0 mt-40  text-white p-10 m-2   " >
          <h1 className="text-4xl text-white font-bold tracking-tight sm:text-6xl"> Join Maan-Kaab</h1>
          <p className=" py-4"> We seek to make extraordinary foundation that advance instructive<br/>
greatness, character advancement and administration to networks.</p>
             <div className="flex  gap-4 mt-4 ">
             <button className="bg-emerald-400 py-3 px-10 w-30 rounded-lg p-10 hover:translate-y-2 duration-100  hover:bg-slate-700 text-xl"><Link to="/Signup">Join </Link></button>
            
             </div>
          </div>
        </div>

       </main>
      <div className="  bg-slate-700  text-30 p-10 text-white uppercase text-center pt-10">
      <div className=" mx-auto max-w-full px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-full    ">
        <p className="text-emerald-400 pt-40 text-xl uppercase"> WHY YOU CHOOSE Maan-KaabAcdemy</p> <br/>
        <h1 className="text-4xl"> Maan-KaabAcdemy is more than eLearning</h1>
        <p className="mt-5 max-w-prose mx-auto text-xl text-white"> WE'RE Focused on CHANGING THE Eventual fate OF LEARNING To improve things AND Give THE Instruments AND Abilities TO Show WHAT YOU LO</p>
       </div>
      


      {/* //courses// */}


    
      <div  className="max-w-7xl mx-auto py-16 px-4 sm:py-2 sm:px-6 lg:px-8">
    <div className="text-center mt-20">
        <div className="">
          
            <p className="mt-2 text-3xl font-extrabold  sm:text-2xl   lg:text-4xl">  Courses </p>
            <p className="text-xl mt-5">The Best Course. Learn anytime & anywhere. </p>
        </div>
        </div>
        <div class="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 lg:grid-cols-3 lg:gap-x-6 my-8 hover:translate-y-6">

           {

              image.map((image, index)=>(

                <Link to={`/${image.enroll}/${image._id}`} >
                <div class=" bg-slate-800  rounded-lg flex flex-col  shadow-md pb-4">
                    <img src={image.image} />
                    <h1 className="text-center text-2xl text-white pt-8">{image.title}</h1>
          <Link to="/Signin"><button  className="bg-emerald-400 py-2 px-2 w-60  lg:ml-10 hover:bg-slate-400 my-10 hover:translate-x-2 duration-100  rounded-lg gap-6">  {image.description} </button>  </Link>   
                  
                    


                </div>
                </Link>
            ))
           }
        </div>



</div>



{/* //testnomails// */}


<div>
    <div className="" > 
         <h1 className=" text-4xl center  py-10 text-emerald-400 "> testnomails </h1>
         <div className="slider">
         <div className="  slides flex justify-contectflex-col lg:ml-10">
         <div className=" slide  px-4 flex justify-center items-center  flex-col"> 
            <p className=" w-[300px] lg:w-[500px] text-center ">
            the world the ability to learn the skills they’d need to succeed in this modern century. 
            We set out to create a new, interactive way of learning — making it engaging
            </p>
            <div className="mt-4"> 
                <p className=" text-xl text-emerald-400"> Hafsa ahmed</p>
                <p> student</p>
            </div>
            </div>

            <div className=" slide px-4 flex justify-center items-center  flex-col"> 
            <p className=" w-[300px] lg:w-[500px] text-center ">
            the world the ability to learn the skills they’d need to succeed in this modern century. 
            We set out to create a new, interactive way of learning — making it engaging
            </p>
            <div className="mt-4"> 
                <p className=" text-xl text-emerald-400"> Abdulaahi  ahmed</p>
                <p> student</p>
            </div>
            </div>

            </div>
            
            {/* <div className=" my-5">
                <button className=" prev bg-emerald-400 p-3 rounded-full mr-5"> <AiOutlineArrowLeft className="text-2xl"/> </button>
                <button className="  next bg-emerald-400 p-3 rounded-full"> <AiOutlineArrowRight className="text-2xl"/> </button>

            </div> */}
           

            
    
         </div>
    </div>

    
</div>














</div>
<Footer/>
        </div>

       
    )
}
export default Home;