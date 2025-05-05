import { useState } from "react";
import NavBar from "./NavBar";
import { useSelector ,useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { accept,refuse } from "./silce";
import { updateEtat } from "./Action";

const ArtistNotifications = () => {
  const dispatcher=useDispatch()
  const {iduser}=useParams()
  const reservations = useSelector(s=>s.reservations).filter(e=>e.idartist==iduser)
  const users =useSelector(s=>s.users)
  return (<><NavBar/>
    <div className=" w-full mx-auto ">
      
      {reservations.map((r,i) => {
       return <div key={i} className="bg-white shadow-sm rounded-lg p-4 mb-4 flex items-center">
          <div className="w-10 h-10 size-10 text-center text-neutral-800 bg-[#EEB866FF] rounded-full mr-2 pt-1 text-xl">
            {users.find(e=>e.id==r.idclient).first_name[0].toUpperCase()}
          </div>
          <div className="ml-4 flex-1">
            <h3 className="font-bold">{users.find(e=>e.id==r.idclient).first_name}</h3>
            <p className="text-gray-600 text-sm">{r.note}</p>
            <p className="text-gray-400 text-xs">{r.dateresrv.toLocaleString()}</p>
          </div>
         {(r.etat==null)?<div><button 
           onClick={()=>dispatcher(updateEtat({etat:'refused',id:r.id}))}
            className="bg-[#EEB866FF] text-white px-3 py-1 rounded-md mx-1"
          >
            Refuser
          </button>
          <button 
            onClick={()=>dispatcher(updateEtat({etat:'accepted',id:r.id}))}
            className="bg-[#EEB866FF] text-white px-3 py-1 rounded-md"
          >
            Accepter
          </button></div>:<p className="text-gray-600 text-sm">{r.etat}</p>} 
        </div>
      })}

{reservations.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No reservations </p>
      )}

    </div>
    </>);
};

export default ArtistNotifications;

