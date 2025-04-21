import ReactStars from "react-rating-stars-component";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
export default function ArtistsCart({artist}){
const {iduser,idArtist}=useParams()
const Reviews=useSelector(s=>s.data.reviews).filter(e=>e.idArtist==artist.id)

return  <div className="  flex flex-col   mb-2 mr-2  border-1 bg-white shadow-sm  border-gray-200 rounded-md   " >
    <Link to={`/detailArtist/${artist.id}/user/${iduser}`} ><img src={`${artist.desc_img}`} className="w-full rounded-t-md h-45  " alt="" /></Link>
<div className="flex relative" >
    <img className={` size-12  relative bottom-6  bg-cover border-gray-500  rounded-full text-center ml-4 inline-block `} src={`${artist.Profil_img}`} alt="" />
    <b className="inline-block absolute right-[10%] text-md ml-1 " >{artist.Nickname}</b>   
</div>
    <div className="relative bottom-3 ">
    <p className="text-[#9095A0FF] text-sm ml-4 " >{artist.Categorie}</p>
    <p className="text-[#9095A0FF] text-sm ml-4 " >Service prix : {artist.prix}$</p>
    <ReactStars size={15} edit={false} value={parseInt( Reviews.reduce((rating,review)=>{ return rating+=review.rating},0)/Reviews.length)}  classNames="  absolute  ml-4  "/>
</div>
</div>
}