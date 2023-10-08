

import { RiVideoFill} from "react-icons/ri"
import { Link } from "react-router-dom";
import Header from "./Header";

function Dashboard(){
    return(
      <div>
      <Header/>
      <div className="    lg:max-w-xs lg:text-lg bg-slate-400 fixed ">
        <div className=" h-screen pt-40 pl-4 text-xl">
            <div className="flex gap-3  mb-10">
                <RiVideoFill className="mt-1"/>
                <h1> <Link to="/HTML">Introduction </Link></h1>
            </div>
            <div className="flex gap-3 mt-10">
                <RiVideoFill className="mt-1"/>
                <h1>How It Works</h1>
            </div>
            <div className="flex gap-3 mt-10">
              <RiVideoFill className="mt-1"/>
              <h1>Start The Code</h1>
            </div>
        </div>




      </div>
      </div>
    )
}


export default Dashboard;