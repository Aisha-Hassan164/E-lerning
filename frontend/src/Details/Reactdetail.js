import {FcCheckmark} from "react-icons/fc"
import {MdKeyboardArrowDown} from "react-icons/md"
import { Link } from "react-router-dom";
import Header from "../Components/Header";
function Reactdetail (){

    return (
        <div>
            <Header/>
        <div  className="  bg-slate-800 text-white  h-screen">
            <div  className=" pt-20  text-lg  pl-20 w-8/12 ">

<h1 className=" text-xl  lg:text-5xl"> React js </h1>
<p className="mb-3 mt-3  text-lg  lg:text-xl">Learn The most valuable skill in web development from scratch Learn Reactjs, Hooks, Redux,
     React Routing, Firebase, Graphql,
     Tailwindcss, Styled Component, Recoil, and Much More.</p>
     <div className="flex gap-3">
<h2 className="bg-white text-black w-12 p-2  pl-4  rounded-full text-2xl ">A</h2>
<p className="mt-1">Aisha Hasaan</p>
     </div>
            </div>
            <div className="bg-slate-600 h-4/6  lg:h-5/6  w-10/12  ml-5 lg:pt-20 lg:pl-10  lg:ml-20  pt-5 pl-5 mt-20 p-20 rounded-96 ">
    <h1 className=" text-lg  lg:text-4xl text-center">What You Will Learn</h1>
            <div className="">
            <div className="  mt-10  text-sm w-60 lg:w-5/6 lg:text-lg">
                <div className="flex gap-3 ">
                <FcCheckmark className="text-2xl" />
    <p>   Build powerful fast, user-friendly and reactive web apps</p>
    </div>
                <div className="flex gap-3 mt-1">
                <FcCheckmark className="text-2xl" />
    <p> Master the latest ecosystem of a React Developer from scratch</p>
    </div>
                <div className="flex gap-3  mt-1">
                <FcCheckmark className="text-2xl" />
    <p>  Learn the latest features in React including Hooks Context API</p>
    </div>
                <div className="flex gap-3  mt-1">
                <FcCheckmark className="text-2xl" />
    <p>  Learn modern React by building 4 projects</p>
    </div>
                <div className="flex gap-3  mt-1">
                <FcCheckmark className="text-2xl" />
    <p> Use cutting-edge ES6/ES7 JavaScript</p>
    </div>
                <div className="flex gap-3  mt-1">
                <FcCheckmark className="text-2xl" />
    <p> Setup authentication and user accounts wth google auth</p>
    </div>
                <div className="flex gap-3  mt-1">
                <FcCheckmark className="text-2xl" />
    <p> Deploy your projects with vercel and railway.</p>
    </div>
                <div className="flex gap-3  mt-1">
                <FcCheckmark className="text-2xl" />
    <p> Learn git and github..</p>
    </div>
   
</div>
</div>
        </div>



</div>

<div className="bg-slate-700  mt-96  lg:mt-80 text-white mb-20 pb-20 ">
    <div className="text-center pt-10">
<h1 className="text-4xl">course circulum</h1>
<p className=" text-lg lg:text-xl mt-10" >We’re committed to changing the future of learning for the better 
  <br/>  and provide the tools and skills to teach what you love.</p>
  <button className="w-40 bg-green-400 text-black p-1 rounded-lg mt-5"> <Link to="/"></Link>Enroll Course</button>
  <p className="text-gray-500 text-sm mt-3">Click The Enroll button!!</p>
    </div>


</div>
        </div>
    )
}


export default Reactdetail;

