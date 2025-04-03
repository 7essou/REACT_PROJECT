import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { addPayInfo } from "./silce";
export default function PaymentForm() {
  const {iduser}=useParams()
  const dispatcher=useDispatch()
  const navto=useNavigate()
  console.log(iduser)
 const user=useSelector(s=>s.data.users).find(e=>e.email==iduser)
  const [formData, setFormData] = useState(user);
 const [msg,setmsg]=useState()
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const  clickHandlet=()=>{
    if((formData.paymentMethod =='card'&&(formData.cvv==""||formData.expiryDate==''||formData.cardNumber==''||formDatanameOnCard==''))){
       setmsg('All fields are required')
    }
    else if (formData.paymentMethod =='paypal'&& formData.paypal==''){ setmsg('All fields are required')}
    else{
      dispatcher(addPayInfo(formData))
      navto(`/login`)}
    }
  return (
    <div className=" pb-25">
    <div className="max-w-lg mx-auto bg-gray-100 p-6 mt-20  rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2 text-gray-800">
        Payment information
      </h2>
      <p className="text-gray-500 mb-4">choose your payement option</p>

      
      <div className="flex space-x-4 mb-6">
        <button
          className={`flex-1 border p-3 rounded-lg ${
            formData.paymentMethod === "card"
              ? "border-yellow-500 bg-yellow-100"
              : "border-gray-300"
          }`}
          onClick={() => setFormData({ ...formData, paymentMethod: "card" })}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/512px-Old_Visa_Logo.svg.png"
            alt="Visa"
            className="h-6 inline"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="Mastercard"
            className="h-6 inline ml-2"
          />
        </button>

        <button
          className={`flex-1 border p-3 rounded-lg ${
            formData.paymentMethod === "paypal"
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300"
          }`}
          onClick={() => setFormData({ ...formData, paymentMethod: "paypal" })}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-6 mx-auto"
          />
        </button>
      </div>

      
     {formData.paymentMethod=='card' && <div><div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium text-gray-700">Name on card</label>
          <input
            type="text"
            name="nameOnCard"
            value={formData.nameOnCard}
            onChange={handleChange}
            className="w-full bg-white border p-2 rounded mt-1"
            placeholder="Enter name on card"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Card number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full  bg-white border p-2 rounded mt-1"
            placeholder="Enter card number"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block font-medium text-gray-700">Expiration date</label>
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            className="w-full  bg-white border p-2 rounded mt-1"
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">CVV</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="w-full  bg-white border p-2 rounded mt-1"
            placeholder="Enter CVV"
          />
        </div>
      </div></div>} 
    {formData.paymentMethod=='paypal' && <div> <label className="block font-medium text-gray-700">Paypal adresse</label> <input
            type="text"
            name="paypal"
            value={formData.paypal}
            onChange={handleChange}
            className="w-full  bg-white border p-2 rounded mt-1"
            placeholder="Paypal adresse"
          /> </div>}
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          name="billingSame"
          checked={formData.billingSame}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-gray-700">Use same address as billing info</label>
      </div>

     

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block font-medium text-gray-700">Zip/Postal code</label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="w-full  bg-white border p-2 rounded mt-1"
            placeholder="Input code"
          />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Country/Region</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border p-2 rounded mt-1"
          >
            <option value="">Select country/region</option>
            <option value="mr" selected >Morroco</option>
          </select>
        </div>
      </div>
  
  <p>{msg}</p>
      
      <button onClick={clickHandlet} className="w-full mt-6 bg-yellow-500 text-white p-3 rounded hover:bg-yellow-600">
        Save information
      </button>
    </div></div>
  );
}
