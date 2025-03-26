import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { becomeArtist } from "./silce";
import { useNavigate } from "react-router-dom";
export default function BecomeArtistForm() {
  const dispatcher =useDispatch()
  const navto =useNavigate()
  const {iduser}=useParams()
  const categories =useSelector(s=>s.data.Categories)
  const cities =useSelector(s=>s.data.cities)
  const catgoriekeys=Object.keys(categories)
  const [formData, setFormData] = useState({
    id:iduser,
    Neckname:'',
    Categorie:'',
    city:'',
    Profil_img:'',
    desc_img:'',
    Adresse:'',
    rating:"",
    about:"",
    Service_desc:"",
    prix:""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  };

  const Clickhandler=()=>{
    dispatcher(becomeArtist(formData))
    navto(`/FormArtiste/formpay/${iduser}`)
  }

  return (
    <div className="bg-neutral-100 ">
    <div className="max-w-3xl my-4 mx-auto bg-white p-8 rounded-xl shadow-md min-h-screen">
      <h2 className="text-2xl font-bold mb-6 h-[80%] text-black">Become an artist</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium text-black">Nickname</label>
            <input
              type="text"
              name="Neckname"
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1 bg-neutral-100 text-black"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium text-black">Adresse</label>
            <input
              type="text"
              name="Adresse"            
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1 bg-neutral-100 text-black"
            />
          </div>
        </div>
        <div>
          <label className="block font-medium text-black">Categorie</label>
          <select
          value={categories.Customizing[0]}
            name="Categorie"
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1 bg-neutral-100 text-black"
          >
            {
               catgoriekeys.map((c,i)=>{
                return <optgroup label={c} key={i}>
                    {categories[c].map((e,j)=>{
                      return <option value={e} key={j}>{e}</option>
                    })}
                </optgroup>
               })
            }
          </select>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-medium text-black">Prix de service</label>
            <input
              type="text"
              name="prix"
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1 bg-neutral-100 text-black"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium text-black">Ville</label>
            <select
            value={cities[0]}
              name="city"
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1 bg-neutral-100 text-black"
            >
              {
                cities.map((c,i)=>{
                  return <option value={c} key={i}>{c}</option>
                })
              }
            </select>
          </div>
        </div>
        <div>
          <label className="block font-medium text-black">Service description</label>
          <textarea
            name="Service_desc"
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1 h-32 bg-neutral-100 text-black"
          ></textarea>
        </div>
        <div>
          <label className="block font-medium text-black">About you</label>
          <textarea
            name="about"
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1 h-32 bg-neutral-100 text-black"
          ></textarea>
        </div>
        <div className="flex justify-between mt-6">
          <Link to={`/artists/user/${iduser}`} type="button" className="text-gray-500 bg-black px-4 py-2 rounded">Cancel</Link>
          <button  onClick={Clickhandler} type="submit" className="bg-yellow-500 text-neubg-neutral-100 px-4 py-2 rounded" >Suivant</button>
        </div>
      </form>
    </div>
    </div>
  );
}
