import {Routes , Route} from "react-router-dom"

import Home from "../Pages/Home";
import About from "./About";
import Course from "./Course";

import Signup from "../Components/Signup";
import Signin from "../Components/Signin";
import Dashboard from "../Components/Dashboard";
import HTML from "../Components/HTML";
import Contactus from "./Contactus";
import Coursedetail from "../Details/Coursedetail";
import Coursedetail2 from "../Details/Coursedetail2";
import Reactdetail from "../Details/Reactdetail";
import Javascriptdetails from "../Details/Javascriptdetails";
import Coursephotos from "../Details/Coursephotos";
import Courseillustrator from "../Details/Courseillustrator copy";
import Coursepremierpro from "../Details/Coursepremierpro";
import Javascvideo from "../CouresVideo/Javascvideo.js";
import Email from "../CouresVideo/Email";
import Testniminal from "./Testniminal";





function App ()
{
    return(
        <div className="max-w-full mx-aut0 p-2 ">
           <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/About" element={<About/>} />
     <Route path="/Course" element={<Course/>} />
     <Route path="/Signup" element={<Signup/>} />
     <Route path="/Signin" element={<Signin/>} />
     <Route path="/Email" element={<Email/>} />




     <Route path="/Dashboard" element={<Dashboard/>} />
     <Route path="/Contactus" element={<Contactus/>} />
     <Route path="/HTML" element={<HTML/>} />
     <Route path="/Javascvideo" element={<Javascvideo/>} />







     <Route path="/Coursedetail/:id" element={<Coursedetail/>} />
     <Route path="/Coursedetail2/:id" element={<Coursedetail2/>} />
     <Route path="/Reactdetail/:id" element={<Reactdetail/>} />
     <Route path="/Javascriptdetails/:id" element={<Javascriptdetails/>} />
     <Route path="/Coursephotos/:id" element={<Coursephotos/>} />
     <Route path="/Courseillustrator/:id" element={<Courseillustrator/>} />
     <Route path="/Coursepremierpro/:id" element={<Coursepremierpro/>} />




     <Route path="/Testniminal" element={<Testniminal/>} />















  
     
   

   

    




           </Routes>
        </div>
    )
}
export default App;