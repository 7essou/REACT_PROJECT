import { Link, useNavigate } from "react-router-dom"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bell } from "lucide-react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { logout } from "./silce"
export default function NavBar(){
    const navto = useNavigate()
    const Allowed =useSelector(s=>s.Allowed)
    const artists=useSelector(s=>s.artists)
    const {iduser}=useParams()
    const [url,seturl]=useState(window.location.pathname)
    const artiste=artists.find(e=>e.id==iduser)
    const Users=useSelector(s=>s.users)
    const dispatch=useDispatch()
    const logouHandler=()=>{
      dispatch(logout(false))
      navto('/')
    }
    return  <nav className="flex flex-col sm:flex-row gap-4 relative shadow-md bg-white z-10 w-full p-4 pb-0 mb-1 border-b border-neutral-200">
         <div className="flex items-center space-x-2">
           <Link to={`/${iduser}`}><img src="/logo.jpg" className="size-8 sm:size-10 rounded-lg shadow-sm" alt="" /></Link>
           <h1 className="text-[20px] sm:text-[25px] text-[Gill Sans]  font-semibold text-gray-800">GetArt</h1>
         </div>
         <ul className="flex flex-row gap-4 mt-2 md:ml-30" onClick={()=>{seturl(window.location.pathname)}}>
          <li className={`transition-all ease-out duration-300 hover:border-b-4 hover:text-[#EEB866FF] hover:font-bold ${(url=='/' || url==`/${undefined} ` ||url==`/${iduser}` )?'border-b-4 font-bold text-[#EEB866FF]':''} border-[#EEB866FF] text-center py-2`}><Link to={`/${iduser}`}>Accuel</Link></li>
          <li className={`transition-all ease-out duration-300 hover:border-b-4 hover:text-[#EEB866FF] hover:font-bold ${url.includes('/artists')?'border-b-4 font-bold text-[#EEB866FF]':''} border-[#EEB866FF] text-center py-2`}><Link to={`/artists/user/${iduser}/page/1`}>Artists</Link></li>
         {artiste&& url!='/'&& Allowed &&<li className={`transition-all ease-out duration-300 hover:border-b-4 hover:text-[#EEB866FF] hover:font-bold ${url.includes('/profile')?'border-b-4 font-bold text-[#EEB866FF]':''} border-[#EEB866FF] text-center py-2`}><Link to={`/profile/${iduser}`}>Myprofile</Link></li> }
         </ul>
         <div className="flex flex-col sm:flex-row gap-4 absolute right-0 w-full sm:w-1/2">
          {(url=='' || url==`/${undefined} ` ||!Allowed ) && <div className="grid grid-cols-2 gap-2 absolute right-10 w-40 h-10 sm:w-50 md:w-60 lg:w-70 xl:w-80">
           <Link to={'/login'} className="rounded-md flex items-center justify-center text-[#EEB866FF] border-2 border-[#EEB866FF] grow-3 hover:bg-[#EEB866FF] hover:text-white hover:cursor-pointer transition-colors duration-300 shadow-sm"><img src="ff" alt="" />Login</Link>
          <Link to={'/signin'} className="rounded-md flex items-center justify-center text-[#EEB866FF] border-2 border-[#EEB866FF] grow-3 hover:bg-[#EEB866FF] hover:text-white hover:cursor-pointer transition-colors duration-300 shadow-sm"><img src="ff" alt="" />Sign in</Link></div>}
        {!artiste&& Users.find(e=>e.id==iduser) &&url.includes(`/artists/user/${iduser}`)&& Allowed &&<Link className="absolute right-15 mt-1.5 transition-all ease-out hover:text-[#EEB866FF] hover:font-bold text-center text-gray-700" to={`/FormArtiste/${iduser}`}>Become an artist</Link>}
        {artiste&& url!='/'&& Allowed && <Link to={`/notifications/${iduser}`} className="absolute right-10 md:right-15 mt-1.5 text-gray-700 hover:text-[#EEB866FF] transition-colors duration-300"> <Bell /> </Link>}
        {(!Number(iduser) || !Allowed )?'':
        <Menu><MenuButton className="size-7 bg-[#EEB866FF] rounded-full text-center mt-0.5 absolute right-1 text-neutral-800 shadow-md hover:shadow-lg transition-shadow duration-300"> {Users.find(e=>e.id==iduser).first_name[0].toUpperCase()}</MenuButton> 
         <MenuItems
         transition
         className="absolute right-0 top-5 z-10 mt-2 w-50 pl-4 origin-top-right divide-y divide-gray-100 rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
        <div className="p-2">
        <MenuItem>
        <div className="size-10 text-center text-neutral-800 bg-[#EEB866FF] rounded-full mr-2 pt-1 text-xl float-left shadow-sm">{Users.find(e=>e.id==iduser).first_name[0].toUpperCase()}</div>
         </MenuItem>

         <MenuItem>
          <p className="font-bold text-gray-800">{Users.find(e=>e.id==iduser).first_name}</p>
         </MenuItem>

         <MenuItem>
          <p className="text-neutral-500 text-[10px]">{Users.find(e=>e.id==iduser).email}</p>
         </MenuItem>
         <MenuItem>
          <Link to={`/reservations/${iduser}`} className="ml-12 text-[15px] text-gray-700 hover:text-[#EEB866FF] transition-colors duration-300">Reservation</Link>
         </MenuItem>
         <MenuItem>
         <div> <button onClick={logouHandler} className="hover:cursor-pointer ml-12 block text-[15px] text-gray-700 hover:text-[#EEB866FF] transition-colors duration-300">log out</button></div>
         </MenuItem>
         </div>
        
       </MenuItems>
        </Menu>}</div>
       
    </nav>
}