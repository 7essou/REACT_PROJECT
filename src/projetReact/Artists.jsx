import { useState } from "react";
import { useSelector } from "react-redux"
import ArtistsCart from "./ArtistCart"
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./footer";
import { useEffect } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Artists(){
    const [page,setpage]=useState(0)
    const [categorie,setcategorie]=useState('')
    const {iduser,nbpage,categ} =useParams()
    useEffect(()=>{
        if(nbpage){
            setpage(nbpage)
        }
        if(categ){
            setcategorie(categ)
        }  
    },[]);
   
    const [tag,settag]=useState('')
    const [rech,setrech]=useState('')
    const [city,setcity]=useState('')
    const cities=useSelector(s=>s.data.cities)
    const Artists = useSelector(s=>s.data.artists).filter(e=>e.id!=iduser&&e.Categorie.toLocaleLowerCase().includes(categorie.toLocaleLowerCase()) && e.Nickname.toLocaleLowerCase().includes(rech.toLocaleLowerCase()) && e.city.toLocaleLowerCase().includes(city.toLocaleLowerCase()))
    const [foundArt,setArt]=useState(Artists.filter(e=>e.Categorie.toLocaleLowerCase().includes(categorie.toLocaleLowerCase()) && e.Nickname.toLocaleLowerCase().includes(rech.toLocaleLowerCase()) && e.city.toLocaleLowerCase().includes(city.toLocaleLowerCase())))
    const Categories = useSelector(s=>s.data.Categories)
    const catgoriekeys=Object.keys(Categories)
    const nav=useNavigate()
    const navhandler=(e)=>{
    if(e.target.name =="<"){
        (nbpage>1)?nav(`/artists/user/${iduser}/page/${parseInt(nbpage)-1}`):''
    }
    else{
        (nbpage<(Artists.length/8)+1)?nav(`/artists/user/${iduser}/page/${parseInt(nbpage)+1}`):''
    }
    }

    return<> <div className="relative w-full  "> <NavBar/>
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 p-4  w-[98%] relative  ">
        <select name="categorie" onChange={(e)=>setcategorie(e.target.value)} className=" border-1 bg-white border-gray-300 pl-2 rounded-md w-full size-9 "  >
          {
            catgoriekeys.map((c,i)=>{
                return <optgroup key={i} label={c} >
                    {Categories[c].map((e,j)=>{
                        return <option value={e} key={j} >{e}</option>
                    })}
                </optgroup>
            })
          }
        </select> 
        <input list="selectCity" onChange={(e)=>setcity(e.target.value)}  className="  border-1 bg-white border-gray-300 pl-2 rounded-md w-full size-9"  placeholder="City.."/>
                <datalist id="selectCity">
                    {
                        cities.map((city,i)=>{
                           return <option value={city} key={i} />
                        })
                    }
                    <option value="Tounfite"/>
                </datalist>
                <div className="w-full flex lg:col-span-2 lg:col-start-4  ">
        <input type="text" onChange={(e)=>settag(e.target.value)} placeholder="search..." className=" border-1 bg-white border-gray-300 pl-2 rounded-l-md w-[80%] size-9" />
        <button onClick={()=>setrech(tag)} className=" rounded-r-md bg-[#EEB866FF] w-10 " ><MagnifyingGlassIcon className="size-5 m-auto " /></button></div>
    </div>
    
    <div className="  mb-5 w-full sm:m-0  p-3   ">
         <div className="grid   lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-3   space-y-4  justify-between  w-full  "  >
           {
            (Artists.length>0)?
            Artists.splice((nbpage-1)*8,8).map((artist,i)=>{
                return <ArtistsCart artist={artist} key={i} />
            })
             : <div  className="h-112 w-full flex items-center justify-center col-span-4">
                <p className="text-gray-400  md:text-2xl">Artist not found</p>
             </div>
           }
    </div> 
    </div>
    <div className="flex justify-center mb-2 gap-3">
       <button name="<" onClick={(e)=>navhandler(e)} className="text-gray-600" >{'<'}</button> <p className="text-gray-600">{nbpage}</p> <button name=">" onClick={(e)=>navhandler(e)} className="text-gray-600" >{'>'}</button>
    </div>
    <Footer/> 
    </div>
   
    </>
}