import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./footer"
import { useParams } from "react-router-dom"
export default function Accules(){
   const {iduser}=useParams()
    return <div className="w-full">
    <NavBar/>
 <div className="relative ">
<div className=" relative bg-[url(/pc1.png)] bg-cover shadow-md w-full md:h-100 h-80  rounded-md  flex items-center justify-center">
 <h1 className="md:text-6xl text-2xl font-bold absolute top-15 text-[#171A1FFF]">Live it with your design</h1>
 <h1 className="md:text-3xl text-xl  absolute top-35 text-[#EEB866FF]">Crafting Custom Styles to Reflect Your Identity</h1>
</div>
<h1 className="  text-3xl m-6  font-bold  ml-30">Some of our serveces </h1>

<div className=" grid grid-cols-3 gap-100 md:gap-1 xl:gap-5 overflow-x-scroll   md:overflow-x-visible  snap-x justify-around mt-1 pl-10 pr-10 m-auto     ">
    <div className=" bg-white w-100 snap-center scroll-ml-6  shadow-[0px_0px_1px_rgba(0,0,0,0.25)] rounded-md md:w-60  lg:w-80  xl:w-100 m-1 h-50    "><img src="/shoes.jpg" className="float-right w-[50%] h-[90%] m-2 rounded-md " alt="" />
    <h1 className="xl:text-xl md:text-lg   font-bold   m-4 ml-4 ">Custom Shoes</h1>
    <p className="break-words lg:text-sm md:text-[10px] text-[#9095A0FF] lg:w-30 ml-4 xl:w-40 xl:leading-7">Check out the best artists to customize you shoes . </p>
    <Link to={`/artists/user/${iduser}/categorie/shoes `} className="border-1 border-solid border-[#EEB866FF] text-[#EEB866FF] rounded-sm lg:py-1 md:py-0.5  lg:px-6 md:px-2  px-6 py-1    relative top-5 lg:top-8 md:top-6  left-4  hover:bg-[#EEB866FF] hover:text-white hover:cursor-pointer" >Check out</Link>
    </div>
    <div className=" bg-white w-100 snap-center scroll-ml-6  shadow-[0px_0px_1px_rgba(0,0,0,0.25)] rounded-md md:w-60 lg:w-80  xl:w-100 m-1 h-50   "><img src="/clothes1.jpg" className="float-right w-[50%] h-[90%] m-2 rounded-md " alt="" />
    <h1 className="xl:text-xl md:text-lg   font-bold   m-4 ml-4 ">Custom clothes</h1>
    <p className="break-words lg:text-sm md:text-[10px] text-[#9095A0FF] lg:w-30 ml-4 xl:w-40 xl:leading-7">Check out the best artists to customize you clothes . </p>
    <Link to={`/artists/user/${iduser}/categorie/clothes`} className="border-1 border-solid border-[#EEB866FF] text-[#EEB866FF] rounded-sm lg:py-1 md:py-0.5  lg:px-6 md:px-2 px-6 py-1   relative top-5 lg:top-3 md:top-6 left-4  hover:bg-[#EEB866FF] hover:text-white hover:cursor-pointer " >Check out</Link>
    </div>
    <div className=" bg-white w-100 snap-center scroll-ml-6  shadow-[0px_0px_1px_rgba(0,0,0,0.25)] rounded-md md:w-60 lg:w-80  xl:w-100 m-1 h-50   "><img src="/portrait.jpg" className="float-right w-[50%] h-[90%] m-2 rounded-md " alt="" />
    <h1 className="xl:text-xl md:text-lg   font-bold   m-4 ml-4 ">Get portrait</h1>
    <p className="break-words lg:text-sm md:text-[10px] text-[#9095A0FF] lg:w-30 ml-4 xl:w-40 xl:leading-7">Get your self a portrait with our artists . </p>
    <Link to={`/artists/user/${iduser}/categorie/portrait`} className="border-1 border-solid border-[#EEB866FF] text-[#EEB866FF] rounded-sm lg:py-1 md:py-0.5  lg:px-6 md:px-2 px-6 py-1   relative top-10 lg:top-8 md:top-6 left-4  hover:bg-[#EEB866FF] hover:text-white hover:cursor-pointer " >Check out</Link>
    </div>
    
</div>
<div><h1 className="text-[30px] m-2 md:text-2xl lg:text-4xl xl:text-6xl font-bold  flex items-center justify-center " >Explore Our Services</h1>
<p className="text-[#9095A0FF] text-[10px] md:text-xl lg:text-2xl  flex items-center justify-center " >Discover our range of customizable clothing and shoe design options, crafted</p>
<p className="text-[#9095A0FF] mb-4 text-[10px] md:text-xl lg:text-2xl flex items-center justify-center " > to fit your unique style and needs</p></div>



        <div className="flex flex-col justify-center align-middle w-full  gap-6 ">
            <div className="  w-[70%]  mx-auto min-w-md max-w-4xl   rounded-lg  mb-20 ">
                <img src="/Screenshot 2025-03-03 151843.png" alt="Design Workspace" className="w-full h-70 rounded-md md:h-full md:w-1/2 md:float-right shrink-0 " />
                <h2 className="text-2xl w-100 relative md:top-5 md:text-2xl lg:top-10 lg:text-4xl font-bold   ml-5">Custom Clothing</h2>
                <p className=" text-gray-600 text-sm  relative md:top-2  lg:top-10 lg:text-xl  m-5 ">Design your perfect outfit with our bespoke clothing services, tailored to your exact preferences and measurements.</p>
             
            </div>
            <div className="  w-[70%] md:flex  mx-auto min-w-md max-w-4xl    rounded-lg  mb-20   ">
                <img src="/Screenshot 2025-03-03 155617.png" alt="Dress Form" className=" w-full h-70 rounded-md md:h-full md:w-1/2  shrink-0" />
                <div className="md:w-1/2 " ><h2 className="text-2xl md:w-100 relative md:top-5  md:text-2xl lg:top-10 lg:text-4xl font-bold ml-5  ">Bespoke Shoes</h2>
                <p className=" text-gray-600 text-sm  relative md:top-2  lg:top-10 lg:text-xl   m-5">Create your ideal pair of shoes, choosing from a variety of styles, materials, and colors to suit any occasion.</p>
                </div>
            </div>
            <div className=" w-[70%]  mx-auto min-w-md max-w-4xl  bg-[#EEB866FF]  rounded-lg  mb-20 ">
                <img src="/Screenshot 2025-03-03 164718.png" alt="Design Workspace" className=" w-full h-70 rounded-md md:h-full md:w-1/2 md:float-right shrink-0  " />
                <h2 className="text-2xl w-100 relative md:top-5 md:text-2xl lg:text-4xl text-white font-bold   ml-5">Commission Your Dream Art</h2>
                <p className=" text-sm  relative md:top-2  lg:top-10 lg:text-xl text-white m-5">Reach out to bring your unique vision to life with a custom piece. Our artist is eager to collaborate and create something special just for you.</p>
             
            </div> 
    </div>
 </div>
  <Footer/>
    </div>
}