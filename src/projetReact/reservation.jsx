import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { annuler,terminer } from "./silce";
import { useParams } from "react-router-dom";
const ReservationClient = () => {
  const dispatcher=useDispatch()
  const {iduser}=useParams()
  const reservations = useSelector(s=>s.data.reservations).filter(e=>e.idclient==iduser)
  const artists= useSelector(s=>s.data.artists)
 
  return (
    <div className="max-w-8xl w-full mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Reservation client</h2>

      {reservations.map((r,i) => {
       return <div
          key={i}
          className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 flex justify-between items-center mb-4"
        >
          {/* Left - Notification Icon & Text */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 text-xl">🔔</span>
            <div>
              <h3 className="font-semibold">Task with {artists.find(e=>e.id==r.idartist).Neckname}</h3>
              <p className="text-sm text-gray-500">{r.etat}...</p>
              <span className="text-xs text-gray-400">{r.dateresrv.toLocaleString()}</span>
            </div>
          </div>

          {/* Right - Buttons */}
         <div className="flex space-x-2">{(r.etat=='') && 
            <button
            name="annuler"
              onClick={(e)=>dispatcher(annuler(r.id))}
              className="bg-yellow-400 text-white px-3 py-1 rounded"
            >
              annuler
            </button>}
            <button
            name="terminer"
              onClick={(e)=>dispatcher(terminer(r.id))}
              className="bg-yellow-600 text-white px-3 py-1 rounded"
            >
              terminer
            </button>
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
