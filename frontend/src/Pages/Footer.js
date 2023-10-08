import {AiFillLinkedin} from "react-icons/ai"
import {BsInstagram} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"

function Footer(){
    return(
        <div className="bg-slate-800 text-white h-fit lg:h-96">
        <div className="grid grid-cols lg:flex gap-10  lg:gap-40 p-20 ">
            <div className="lg:w-80">
                <h1 className="text-2xl">Info</h1>
                <p className=" text-sm mt-3">We aspire to create outstanding academy that promote educational
excellence, character development and service to communities.</p>
            </div>
<div className="">
    <h1 className="mb-5 text-2xl">Quick Access</h1>
    <p className="mt-3">Home</p>
    <p className="mt-3">About</p>
    <p className="mt-3">Courses</p>
    <p className="mt-3">Contact</p>
</div>
<div className="text-2xl">
<h1>Fllow Us </h1>
<div className=" flex gap-3 mt-5 text-2xl hover:text-slate-400 ">
   
    <AiFillLinkedin/>
    <BsInstagram/>
    <BsTwitter/>
    <BsFacebook/>
</div>
</div>
        </div>
        <div className="pl-20 text-xl pb-10 mb-5">
        &copy;| All right reserved!
        </div>

 </div>
    )
}


export default Footer;