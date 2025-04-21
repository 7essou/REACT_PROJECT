import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
export default function AllImages(){
    const nav=useNavigate()
    const {idArtist,iduser}=useParams()
    const images=useSelector(s=>s.images).filter(e=>e.idArtist==idArtist)
    return <div>
        <NavBar/>
        <Link className=" text-[12px] md:text-sm  text-[#EEB866FF]" onClick={()=>{nav(-1)}} > {`<`} Back to profile</Link>  
         <div className=" mx-1 mt-2 grid grid-cols-3 gap-1 " >
        {
            (images.length>0)?
            images.map((e,i)=>{
                return <div key={i}  ><img className="rounded-sm h-80 w-full " src={`${e.img}`} alt="" /></div>
            }):
            <div  className="h-112 w-full flex items-center justify-center col-span-4">
                <p className="text-gray-400  md:text-2xl">no imges</p>
             </div>
        }
    </div></div>
}