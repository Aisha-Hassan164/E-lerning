import {HiOutlineMail} from "react-icons/hi"
import {BiPhoneCall} from "react-icons/bi"
import Header from "../Components/Header";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


function Contactus (){
    const form = useRef();
    const sendEmail = (e) => {

        e.preventDefault();
    
        emailjs.sendForm('service_kqwymme', 'template_nq33ybp', form.current, 'U3JbFKYshL7EdgVGd')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


    return (
        <div>
        <Header/>
            <div className="bg-slate-800 h-fit ">
                
                <div className="grid grid-cols-1 py-20 ml-10  gap-8 lg:ml-20 lg:flex">

                <div className="bg-slate-500  p-10 m-2 lg:m-10 mr-8 rounded-lg ">
                    <h1 className="text-4xl text-white text-center">Contact Info</h1>
                    <p className="mt-3 text-lg">If you have any question or simply want to contact with us</p>
                 <div className="flex gap-2 mt-10">
                    <BiPhoneCall className="mt-1 mt-4 text-4xl text-slate-800"/>
                  <div className="grid text-xl ">
                  <h1>+252617993837</h1>
                    <h1>+252612650046</h1>
                  </div>
                 </div>
                
                 <div className="flex gap-2 mt-3 ">
                    <HiOutlineMail className="mt-1 text-4xl text-slate-800"/>
                    <h1 className="text-xl mt-2">Maankaab@gmail.com</h1>
                 </div>
                </div>
<div className=" text-white ">
<h1 className="mb-5 text-xl">Send Us Massage</h1>

<form className=""  onSubmit={sendEmail} Ref={form}>

   <label className="text-xl">Full name</label><br/>
   <input type="text" name="name" className="w-72 p-2 lg:p-2 lg:w-96 lg:w-96 bg-transparent border border-gray-400 rounded-md   "/><br/>
   <label  className="text-xl">Email</label><br/>
   <input type="email" name="email" className="w-72 p-2 lg:w-96 p-2 bg-transparent border border-gray-400 rounded-md   "/><br/>
   <label className="text-xl">Massage</label><br/>
<textarea typeof="text" name="message" className="mt-3 bg-transparent border border-gray-400 rounded-md w-72 h-32 lg:w-96 h-20"></textarea>

</form>
<button className="mt-3 bg-emerald-400 text-black text-lg p-2 w-72  ml-10 rounded-md hover:translate-x-2 duration-100 hover:bg-slate-600 hover:text-white">Submit</button>
</div>
</div>
</div>

        </div>
    )
}


export default Contactus;