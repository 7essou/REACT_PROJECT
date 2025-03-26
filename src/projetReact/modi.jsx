import React from "react";

const Modification = () => {
  return (
    <div className="max-w-md mx-auto bg-neutral-200 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        📜 Modification
      </h2>
      <p className="text-gray-500 text-sm">Nisi laborum eiusmod mollit pa</p>
      <div className="mt-4">
        <label className="block font-medium text-gray-700">Nickname</label>
        <input
          type="text"
          placeholder="Nickname"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mt-4">
        <label className="block font-medium text-gray-700">Adresse</label>
        <input
          type="text"
          placeholder="Adresse"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="mt-4">
        <label className="block font-medium text-gray-700">Description</label>
        <textarea
          placeholder="about me"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          rows="3"
        ></textarea>
      </div>
      <button className="mt-4 w-full bg-yellow-500 text-white font-medium py-2 rounded-lg hover:bg-yellow-600 transition">Modifie</button>
    </div>
  );
};

export default Modification;
