import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
export default function AllImages(){
    const {idArtist,iduser}=useParams()
    const images=useSelector(s=>s.data.images).filter(e=>e.id==idArtist)
    return <div>
        <NavBar/>
        <Link className=" text-[12px] md:text-sm  text-[#EEB866FF]" to={`/detailArtist/${idArtist}/user/${iduser}`}> {`<`} Back to profile</Link>  
         <div className=" mx-1 mt-2 grid grid-cols-3 gap-1 " >
        {
            (images.length>0)?
            images.map((img,i)=>{
                return <div key={i} className={`   `} ><img className="rounded-sm" src={`/${img.img}`} alt="" /></div>
            }):
            <div  className="h-112 w-full flex items-center justify-center col-span-4">
                <p className="text-gray-400  md:text-2xl">no imges</p>
             </div>
        }
    </div></div>
}