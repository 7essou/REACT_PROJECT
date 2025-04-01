import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import NavBar from "./NavBar"
import ReactStars from "react-rating-stars-component";
export default function AllReviews(){
    const {idArtist,iduser}=useParams();
    const reviews=useSelector(s=>s.data.reviews).filter(e=>e.idArtist==idArtist)
    const users =useSelector(s=>s.data.users)
  return (<><NavBar/>
          <Link className=" text-[12px] md:text-sm text-[#EEB866FF] ml-2" to={`/detailArtist/${idArtist}/user/${iduser}`}> {`<`} Back to profile</Link>  
    <div className=" w-full mx-auto mt-2 ">
      {
      (reviews.length>0)?
      reviews.map((r,i) => {
         return<div  key={i} className="bg-white shadow-sm rounded-lg p-4 mb-4 " > <div  className=" flex justify-between">
         <div> 
             <div className="mr-2 bg-[#EEB866FF] rounded-full size-6 md:size-10  float-left flex flex-col justify-center text-center text-[10px] md:text-sm " >{users.find(e=>e.id==r.idClient).first_name[0].toUpperCase()}</div>
             <h4 className="text-[9px] md:text-sm  text-neutral-600 font-bold ">{users.find(e=>e.id==r.idClient).first_name}</h4>
             <p className="text-[8px] md:text-sm text-neutral-600  ml-8 md:ml-12 " >{users.find(e=>e.id==r.idClient).email}</p>
         </div>
         <ReactStars size={20} value={r.rating} edit={false} classNames="absolute right-0" />
     </div> <p className="m-2  text-[10px] text-neutral-600 " >{r.description}</p>
 </div>
      })
    :
    <div  className="h-112 w-full flex items-center justify-center col-span-4">
                <p className="text-gray-400  md:text-2xl">No reviews </p>
             </div>
    }
    </div>
    </>);
}