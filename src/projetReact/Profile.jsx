import { Pencil } from "lucide-react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import ReactStars from "react-rating-stars-component";
import { MapPinIcon } from '@heroicons/react/24/solid';
import Footer from "./footer";
import { useEffect, useState } from "react";
import { updateArtist ,addImg,getimages} from "./Action";
export default function Profile(){
    const edited=useSelector(s=>s.edited)
    const dispatcher=useDispatch()
    useEffect(()=>{
      dispatcher(getimages())
    },[edited])
    const {iduser}=useParams()
    const Users=useSelector(s=>s.users)
    const Reviews=useSelector(s=>s.reviews).filter(e=>e.idArtist==iduser)
    const imgs=useSelector(s=>s.images).filter(e=>e.idArtist==iduser)
    console.log(imgs)
    const [Vinfo,setVinfo]=useState(false)
    const [Vservice,setVservice]=useState(false)
    const artistdata = new FormData()
    const images = new FormData()  
    const Artist=useSelector(s=>s.artists).find(e=>e.id==iduser)
    const [editArtist,setartist]=useState(Artist) 
    const [primg,setprimg]=useState('')
    const [descimg,setdescimg]=useState('')
    const [img,setimg]=useState()
    images.append('idArtist',iduser)
    images.append('image',img)
    artistdata.append('artist', JSON.stringify(editArtist));
    artistdata.append('profilImg', primg);
    artistdata.append('descImg', descimg);
    useEffect(()=>{
          dispatcher(addImg(images))
          dispatcher(updateArtist(artistdata))
    },[primg,descimg,img])
    
    const handeledit = () => {
      try {
         dispatcher(updateArtist(artistdata));
        setVinfo(false);
        setVservice(false);
      } catch (error) {
        console.error("Error updating artist:", error);
      }
    };
    return <div >
    <div className={`${(Vservice||Vinfo)?'blur-sm':''}`} ><NavBar/></div>
    <div className={`fixed left-[40%] top-[20%] z-10  transition all duration-300 ease-in-out
    ${(Vinfo)?'opacity-100 scale-100 pointer-events-auto':'opacity-0 scale-90 pointer-events-none'}
    `} >
        <div className="max-w-md mx-auto bg-neutral-200 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        📜 Modification
      </h2>
      <div className="mt-4">
        <label className="block font-medium text-gray-700">Nickname</label>
        <input
        onChange={(e)=>setartist({...editArtist,Nickname:e.target.value})}
          type="text"
          placeholder="Nickname"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mt-4">
        <label className="block font-medium text-gray-700">Adresse</label>
        <input
                onChange={(e)=>setartist({...editArtist,Adresse:e.target.value})}
          type="text"
          placeholder="Adresse"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mt-4">
        <label className="block font-medium text-gray-700">Description</label>
        <textarea
                onChange={(e)=>setartist({...editArtist,about:e.target.value})}
          placeholder="about me"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          rows="3"
        ></textarea>
      </div>
      <button onClick={handeledit}  className="mt-4 w-full bg-yellow-500 text-white font-medium py-2 rounded-lg hover:bg-yellow-600 transition">Modifie</button>
    </div>
    </div>

    <div className={`fixed left-[40%] top-[20%] z-10  transition all duration-300 ease-in-out
    ${(Vservice)?'opacity-100 scale-100 pointer-events-auto':'opacity-0 scale-90 pointer-events-none'}
    `} >
         <div className="bg-neutral-200 p-6 rounded-lg shadow-lg w-96">
        <div className="flex items-center mb-4">
          <span className="text-orange-500 text-2xl">📜</span>
          <h2 className="text-xl font-semibold ml-2">Modification de l'artiste</h2>
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className="space-y-4">
          
          <div>
            <label className="block font-semibold text-gray-700">Prix</label>
            <input
                    onChange={(e)=>setartist({...editArtist,prix:e.target.value})}
              type="number"
              className="w-full p-2 border rounded-md bg-gray-100"
              placeholder="Prix"
              required
            />
          </div>

        
          <div>
            <label className="block font-semibold text-gray-700">Service description</label>
            <textarea
                    onChange={(e)=>setartist({...editArtist,Service_desc:e.target.value})}
              className="w-full p-2 border rounded-md bg-gray-100"
              placeholder="About me"
              rows="3"
              required
            />
          </div>

          
          <button
          onClick={handeledit}
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-md transition"
          >
            Modifier
          </button>
        </form>
      </div>
 
    </div>
    <div className={`lg:flex ${(Vservice||Vinfo)?'blur-sm':''}  `}>
      <div className="  border-1 border-gray-200 shadow-[0px_1px_1px_rgba(0,0,0,0.25)] rounded-md w-full ml-2     lg:w-[50%]    " >
      <button onClick={()=>setVinfo(!Vinfo)} className="float-right m-4 hover:cursor-pointer " ><Pencil size={20} color="black" /></button>
        <div className="grid grid-cols-3 ">
            {(Artist['Profil_img'])?<div className={`relative top-4 left-5 md:left-5 xl:left-10  rounded-full xl:size-30 md:size-25 sm:size-20 size-20 float-left`}>
              <img className=" relative rounded-full" src={`${Artist.Profil_img}`} alt="" />
              <div  onClick={()=>{document.getElementById('primg').click()}} className="size-5 rounded-full flex justify-center items-center absolute right-1 top-3 bg-gray-200" >
                <Pencil size={14} color="black" />
                <input type="file" id="primg" className="hidden" onChange={(e)=>{setprimg(e.target.files[0])}} />
                </div>
              </div>
                : <div className=" relative   top-4 left-5 md:left-5 xl:left-10  rounded-full xl:size-30 md:size-25 sm:size-20 size-20 float-left flex justify-center items-center" >
                <p className="absolute  text-4xl " >+</p>
            <input  className=" bg-gray-300 text-gray-300   rounded-full xl:size-30 md:size-25 sm:size-20 size-20 float-left" onChange={(e)=>setprimg(e.target.files[0])}  type="file" /></div> }
             
             <div className="space-y-0.5" >
                <h1 className="mt-4 ml-4 font-bold text-neutral-600  " >{Artist.Nickname}</h1>
                <p className="text-[#9095A0FF] ml-4 mb-2 text-[12px]" >{Users.find(e=>e.id==iduser).email}</p>
                <div className="flex flex-col justify-baseline align-middle ml-4 bg-gray-200 w-18 h-12 pb-1 rounded-md " >
                    <p className="text-[10px] text-center  text-neutral-600" >RATING</p>
                    <p className="text-[10px] text-center  text-neutral-600 " >{Artist.rating}</p>
                   <ReactStars size={13} value={Reviews.reduce((rating,review)=>{ return rating+=review.rating},0)/Reviews.length} edit={false} classNames="m-auto " />
                </div>
            </div>
             <div className="relative top-20 right-5">
                <div className="bg-gray-200 size-10 rounded-full mr-2 float-left flex flex-col justify-center " ><MapPinIcon className="size-5 m-auto" /></div>
                <p className="text-sm text-neutral-600 " >Adresse</p>
                <p className="text-[#9095A0FF]  text-[10px] block" >{Artist.Adresse}</p>
             </div>
        </div> 


        <div className="m-4 mt-8 ">
            <h1 className=" font-bold text-neutral-600  " >About</h1>
            <p className="text-[#9095A0FF] ml-4 text-[70%] block" >{Artist.about}</p>
        </div>


        <div className="m-4 mt-10 w-full ">
            <h1 className=" font-bold mb-2 text-neutral-600  " >Reviews</h1>
            <div className="grid grid-cols-2  gap-2 mr-20 " >
                
                    {
                       Reviews.splice(0,2).map((r,i)=>{
                        return<div  key={i} className="bg-neutral-100 rounded-md " > <div  className="grid grid-cols-2">
                        <div> 
                            <div className="m-4 bg-[#EEB866FF] rounded-full size-6 float-left flex flex-col justify-center text-center text-[10px] " >{Users.find(e=>e.id==r.idClient).first_name[0].toUpperCase()}</div>
                            <h4 className="text-[9px]  text-neutral-600 font-bold mt-1">{Users.find(e=>e.id==r.idClient).first_name}</h4>
                            <p className="text-[8px] text-neutral-600 " >{Users.find(e=>e.id==r.idClient).email}</p>
                        </div>
                        <ReactStars size={10} value={r.rating} edit={false} classNames="mt-1 ml-5 " />
                    </div> <p className="m-2 mt-0 text-[8px] text-neutral-600 " >{r.description}</p>
                </div>
                       }) 
                    }
                   
                   
            </div>
        </div>
      </div> 

      <div className="   border-1 border-gray-200 shadow-[0px_1px_1px_rgba(0,0,0,0.25)] rounded-md w-full mr-2 lg:ml-4  lg:w-[50%]     " >
          {(Artist.desc_img)?<div className={` bg-cover  relative w-full rounded-md h-70`} >
            <img className="w-full h-full rounded-md" src={`${Artist.desc_img}`} alt="" /><div onClick={()=>{document.getElementById("descimg").click()}} className="absolute top-1 right-1" ><Pencil size={20} color="black" /><input type="file" id="descimg" className="hidden" onChange={(e)=>{setdescimg(e.target.files[0])}}  /> </div></div>
            : <div className="w-full lg:h-1/2 h-60 bg-cover flex justify-center items-center  " >
              <p className="absolute  text-4xl " >+</p> 
              <input onChange={(e)=>setdescimg(e.target.files[0])} className={` bg-cover text-neutral-200 bg-neutral-200 w-full rounded-md h-full`} type="file" /></div>   } 
      <div className=""><button onClick={()=>setVservice(!Vservice)} className="float-right m-4 hover:cursor-pointer"  ><Pencil size={20} color="black" /></button>
      <div className=" m-3  " ><div className="flex"><p className="font-bold text-4xl   text-[#EEB866FF]" >{Artist.prix}$</p><p className="mt-4  text-neutral-400" >/price</p></div> </div>
      <div className="m-4 mt-4 ">
            <p className="text-[#9095A0FF] ml-4 text-[70%] " >{Artist.Service_desc}</p>
        </div></div>
    </div>
  </div> 

  <div className={`${(Vservice||Vinfo)?'blur-sm':''}`}> 
  <h1 className="m-4 font-bold text-2xl text-neutral-900" >my work</h1>    
  <div className="grid grid-cols-3 mb-6   gap-2 my-2 mx-6   " >
    {
     imgs.splice(0,2).map((e,i)=>{
     
      return <div key={i} className={`   shadow-[0px_1px_1px_rgba(0,0,0,0.25) rounded-md    `} ><img className="rounded-md h-60 w-full " src={`${e.img}`} alt="" /></div>

     })
    }
  <div className={`  shadow-[0px_1px_1px_rgba(0,0,0,0.25) ${imgs.length==0?'h-60':''}  rounded-md flex justify-center items-center  `} >
    <p className="absolute    text-4xl " >+</p>
    <input onChange={(e)=>setimg(e.target.files[0])} className={` bg-cover text-neutral-200  bg-neutral-200 w-full rounded-md h-full`} type="file" />
    </div>
  </div>
  <Footer/> </div>
</div>
}
