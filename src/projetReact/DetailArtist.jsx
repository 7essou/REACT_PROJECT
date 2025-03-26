import { useNavigate, useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { addreview ,addreservation} from "./silce";
import NavBar from "./NavBar";
import Footer from "./footer";
import ReactStars from "react-rating-stars-component";
import { MapPinIcon } from '@heroicons/react/24/solid';
import { useState } from "react";

export default function DetailArtist(){
const navto=useNavigate()
const {iduser,idArtist}=useParams()
const [visible,setvisible]=useState(false)
const Allowed = useSelector(s=>s.Allowed)
const Artist=useSelector(s=>s.data.artists).find(e=>e.id==idArtist)
const Users=useSelector(s=>s.data.users)
const reservations = useSelector(s=>s.data.reservations).find(e=>e.idclient==iduser && e.idartist==idArtist)
const Reviews=useSelector(s=>s.data.reviews)
const imgs=useSelector(s=>s.data.WorkImg).filter(e=>e.id==idArtist)
console.log(useSelector(s=>s.data.Allowedsafiy))
const[review,setreview]=useState({
        id:'jkj',
        idArtist:idArtist,
        idClient:iduser,
        description:'',
        rating:''
})
const[reserv,setreserv]=useState({
    id:'',
    idclient :iduser,
    idartist :idArtist,
    etat:"",
    dateresrv : new Date(),
    note:''
})
const dispatcher=useDispatch()
const changeHandler=(e)=>{
const {value,name}=e.target 
setreview({...review,[name]:value})
}
const clickHandler= async()=>{
 const r =await dispatcher(addreview(review))
 if(r){
  alert('The review has been add')
  
 }
}
const addReservation= async ()=>{
const r= await dispatcher(addreservation(reserv))
setvisible(false)
if(r){
  alert('The reservation has been add')
 }
}
const resercheck = ()=>{
  if(Allowed){
    setvisible(true)
  }
  else{
    navto('/login')
  }
}

return  <div>
  <div className={`${(visible)?'blur-sm':''}`} >
    <NavBar />
  </div>
  <div 
  className={`transition-all duration-300 ease-in-out 
    ${visible 
      ? 'opacity-100 scale-100 pointer-events-auto' 
      : 'opacity-0 scale-90 pointer-events-none'} 
    z-10 fixed border border-gray-100 shadow-2xs p-5 top-[30%] left-[30%] w-[40%] h-60 bg-gray-100 rounded-md`}
>
  <label className="block font-medium text-black">Add a note to the Artist</label>
          <textarea
          onChange={(e)=>setreserv({...reserv,note:e.target.value})}
            name="Service_desc"
            className="w-full resize-none border p-2 rounded mt-1 h-32 bg-white text-black"
          ></textarea>
          <button onClick={()=>setvisible(false)} className="m-auto bg-[#EEB866FF] w-[20%]  mt-4 absolute top-[70%] left-[50%] py-2 rounded-md font-bold text-white hover:cursor-pointer ">Annuler</button>
          <button onClick={addReservation} className="m-auto bg-[#EEB866FF] w-[20%]  mt-4 absolute top-[70%] left-[75%] py-2 rounded-md font-bold text-white hover:cursor-pointer " >Add</button>
  </div>
    <div className={`md:flex p-2  ${visible ?"blur-sm":''}  `}>
      <div className="border-1 border-gray-200 shadow-md rounded-md w-full  mt-1  md:w-[50%]    " >
        <div className="grid grid-cols-3 ">
             <div className={`relative top-4 left-5 md:left-5 xl:left-10  rounded-full xl:size-30 md:size-25 sm:size-20 size-20 float-left`}><img className="rounded-full" src={`/${Artist['Profil_img']}`} alt="" /></div>
             <div className="space-y-0.5" >
                <h1 className="mt-4 ml-4 font-bold text-neutral-600  " >{Artist.Nickname}</h1>
                <p className="text-[#9095A0FF] ml-4 mb-2 text-[12px]" >{Users.find(e=>e.id==idArtist).email}</p>
                <div className="flex flex-col justify-baseline align-middle bg-gray-200 w-18 h-12 pb-1 ml-6 rounded-md " >
                    <p className="text-[10px] text-center  text-neutral-600" >RATING</p>
                    <p className="text-[10px] text-center  text-neutral-600 " >{parseInt(Artist.rating)}</p>
                   <ReactStars size={13} value={parseInt( Artist.rating)} edit={false} classNames="m-auto " />
                </div>
            </div>
             <div className="relative top-20 right-10">
                <div className="bg-gray-200 size-10 rounded-full mr-2 float-left flex flex-col justify-center " ><MapPinIcon className="size-5 m-auto" /></div>
                <p className="text-sm text-neutral-600 " >Adresse</p>
                <p className="text-[#9095A0FF] ml-4 text-[10px] block" >{Artist.Adresse}</p>
             </div>
        </div> 


        <div className="m-4 mt-8 ">
            <h1 className=" font-bold text-neutral-600  " >About</h1>
            <p className="text-[#9095A0FF] ml-4 text-[70%] block" >{Artist.about}</p>
        </div>


        <div className="m-4 mt-8 ">
            <h1 className=" font-bold  text-neutral-600  " >Reviews</h1>
            <div className="grid grid-cols-2 gap-2 mt-4 " >
                
                    {
                       Reviews.filter(e=>e.idArtist==idArtist).splice(0,2).map((r,i)=>{
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
       
         <div >
         <div className="grid grid-cols-3 relative  gap-1 mt-8 ml-4 " >
           <div className="col-span-2 " >
             <div className="m-2 bg-[#EEB866FF] rounded-full size-10 float-left flex felx-col justify-center text-center pt-2 " >{(Users.find(e=>e.id==iduser))? Users.find(e=>e.id==iduser).first_name[0].toUpperCase():'A'} </div>
             <input name="description" onChange={changeHandler} readOnly={!Allowed && !reservations}  className=" bg-neutral-100 mt-2 w-3/4 h-10 rounded-3xl border-1 text-center border-neutral-400  text-[10px] placeholder:text-[10px]    " placeholder="Write a comment.." type="text" />
           </div>
 
         <ReactStars name='rating' onChange={(e)=>setreview({...review,rating:e})} size={25}  classNames={` relative right-6 top-1 `}  />
         <button onClick={clickHandler} className={`absolute right-[5%] bottom-1 ${(!Allowed && !reservations)?'cursor-not-allowed pointer-events-none':'hover:cursor-pointer'} bg-[#EEB866FF] w-[10%] py-3  mt-6  rounded-md font-bold  text-white  `} >Add</button>

       </div>
       </div>
        
      </div> 

      <div className=" relative flex   flex-col border-1 border-gray-200 shadow-md rounded-md w-full md:ml-4  md:w-[50%]     " >
           <div className={` bg-cover w-full rounded-md h-70`} ><img className="w-full h-full rounded-md" src={`/${Artist.desc_img}`} alt="" /></div>
    
      <div className="flex relative  m-3" ><p className="font-bold text-4xl   text-[#EEB866FF]" >{Artist.prix}$</p><p className="mt-4  text-neutral-400" >/pice</p> <button onClick={resercheck}  className=" bg-[#EEB866FF] w-[20%] py-2  absolute left-[80%]  rounded-md font-bold text-white hover:cursor-pointer " >Reserve</button></div>  
      <div className=" mt-2 ">
            <p className="text-[#9095A0FF] ml-4 mb-4 text-[70%] block" >{Artist.Service_desc}</p>
        </div>
     
    </div>
  </div>  
  <div className={`${visible ?"blur-sm":''}`} >   
  <h1 className="m-4 font-bold text-2xl text-neutral-900" >my work</h1>    
  <div className="grid grid-cols-3   gap-4 my-6 mx-4 " >
    {
     imgs.splice(0,3).map((e,i)=>{
     
      return <div key={i} className={` h-1/2 shadow-md  `} ><img className="rounded-sm" src={`/${e.img}`} alt="" /></div>

     })
    }
   
  </div>
  </div>
  
</div>
}