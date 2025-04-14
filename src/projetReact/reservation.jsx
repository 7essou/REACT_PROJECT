import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { annuler,terminer } from "./silce";
import { useParams } from "react-router-dom";
import Footer from "./footer";
import NavBar from "./NavBar";
const ReservationClient = () => {
  const dispatcher=useDispatch()
  const {iduser}=useParams()
  const reservations = useSelector(s=>s.data.reservations).filter(e=>e.idclient==iduser)
  const artists= useSelector(s=>s.artists)
 
  return (

    <div className=" w-full mx-auto ">
      <NavBar/>

      {reservations.map((r,i) => {
       return <div
          key={i}
          className=" bg-white shadow-sm rounded-lg p-4 mb-4 flex items-centerborder border-yellow-100 justify-between items-center"
        >
       
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 text-xl">🔔</span>
            <div>
              <h3 className="font-semibold">Task with {artists.find(e=>e.id==r.idartist).Nickname}</h3>
              <p className="text-sm text-gray-500">{r.etat}...</p>
              <span className="text-xs text-gray-400">{r.dateresrv.toLocaleString()}</span> 
            </div>
          </div>

        
         <div className="flex space-x-2">{(r.etat=='') && 
            <button
            name="annuler"
              onClick={(e)=>dispatcher(annuler(r.id))}
              className="bg-[#EEB866FF] text-white px-3 py-1 rounded"
            >
              annuler
            </button>}
            {(r.etat=='done') ?'': <button
            name="terminer"
              onClick={(e)=>dispatcher(terminer(r.id))}
              className="bg-[#EEB866FF] text-white px-3 py-1 rounded"
            >
              terminer
            </button> }
           
          </div>
        </div>
})}

      {reservations.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No reservations left.</p>
      )}
    </div>
  );
};

export default ReservationClient;
