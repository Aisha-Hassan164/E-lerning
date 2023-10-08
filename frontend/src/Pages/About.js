import Header from "../Components/Header";
import Footer from "./Footer";

function About()
{
    return(
        <div>
            <Header/>

            <div className="bg-white  text-black">
                <div >

                <p className=" text-center pt-10  text-4xl font-extrabold "> About Us</p>
                <p className=" w-9/12 leading-8 text-lg  mt-10  ml-12 lg:ml-40 mb-40 fle flex justify-center "> When we started Maan-Kaab Online Courses back in 2018, our goal was to give Somalis  from all across 
                    the world the ability to learn the skills they’d need to succeed in this modern century. We set out 
                    to create a new, interactive way of learning — making it engaging, flexible,  and accessible  for as many 
                    people as possible. Since then, we have helped hundreds of Somali people worldwide unlock modern technical 
                    skills and reach their full potential through code. There are two commitments we've made to the world. 
                    We've been grounded by these since day one: Increase access 
                    to high-quality education for everyone, everywhere; Enhance teaching and learning online through research</p>
                </div>
            </div>
            
           <Footer/>
         
        </div>
    )
}
export default About;