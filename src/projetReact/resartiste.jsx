import { useState } from "react";
import NavBar from "./NavBar";
import { useSelector ,useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { accept,refuse } from "./silce";
import { Space } from "lucide-react";
const ArtistNotifications = () => {
  const dispatcher=useDispatch()
  const {iduser}=useParams()
  const reservations = useSelector(s=>s.data.reservations).filter(e=>e.idartist==iduser)
  const users =useSelector(s=>s.data.users)
  return (
    <div className="max-w-7xl w-full mx-auto ">
      {reservations.map((r,i) => {
       return <div key={i} className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center">
          <div className="w-10 h-10 flex items-center justify-center bg-yellow-400 text-white font-bold rounded-full">
            {users.find(e=>e.id==r.idclient).first_name[0].toUpperCase()}
          </div>
          <div className="ml-4 flex-1">
            <h3 className="font-bold">{users.find(e=>e.id==r.idclient).first_name}</h3>
            <p className="text-gray-600 text-sm">{r.note}</p>
            <p className="text-gray-400 text-xs">{r.dateresrv.toLocaleString()}</p>
          </div>
         {(r.etat=='')?<div><button 
           onClick={()=>dispatcher(refuse(r.id))}
            className="bg-red-500 text-white px-3 py-1 rounded-lg mx-1"
          >
            Refuser
          </button>
          <button 
            onClick={()=>dispatcher(accept(r.id))}
            className="bg-lime-500 text-white px-3 py-1 rounded-lg"
          >
            Accepter
          </button></div>:<p className="text-gray-600 text-sm">{r.etat}</p>} 
        </div>
      })}
    </div>
  );
};

export default ArtistNotifications;

