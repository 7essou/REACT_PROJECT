import { useState } from "react";

const EditArtist = () => {
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Prix:", price);
    console.log("Description:", description);
  };

  return (
   
      <div className="bg-neutral-200 p-6 rounded-lg shadow-lg w-96">
        <div className="flex items-center mb-4">
          <span className="text-orange-500 text-2xl">📜</span>
          <h2 className="text-xl font-semibold ml-2">Modification de l'artiste</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block font-semibold text-gray-700">Prix</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md bg-gray-100"
              placeholder="Prix"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

        
          <div>
            <label className="block font-semibold text-gray-700">Service description</label>
            <textarea
              className="w-full p-2 border rounded-md bg-gray-100"
              placeholder="About me"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          
          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-white py-2 rounded-md transition"
          >
            Modifier
          </button>
        </form>
      </div>
 
  );
};

export default EditArtist;
