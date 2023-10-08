import { useState } from "react";
import {AiOutlineArrowRight} from "react-icons/ai"
import {AiOutlineArrowLeft} from "react-icons/ai"

function Testniminal()
{



    const[test ,setTest]=useState(true);




    return(
      
<div>
    <div className="" > 
         <h1 className=" text-4xl center  py-10 text-emerald-400 "> testnomails </h1>
         <div className="" >
         <div className="  slides flex justify-contect w-[400vw]">
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
                <p className=" text-xl text-emerald-400"> Hafsa ahmed</p>
                <p> student</p>
            </div>
            </div>
            </div>
            
            <div className=" my-5">
                <div className=" text-black" onClick={()=> setTest(!test)}>

                {
            test ?(
                <AiOutlineArrowLeft className="h-"/>
            ):
            (
                <AiOutlineArrowRight/>
            )
        }




                {/* <button className=" prev bg-emerald-400 p-3 rounded-full mr-5"> <AiOutlineArrowLeft className="text-2xl"/> </button>
                <button className="  next bg-emerald-400 p-3 rounded-full"> <AiOutlineArrowRight className="text-2xl"/> </button> */}

            </div>
            </div>
           

            
    
         </div>
    </div>

    
</div>
    )
}
export default Testniminal;