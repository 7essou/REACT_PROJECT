import { useState } from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { singin } from "./silce";
import { useNavigate } from "react-router-dom";
export default function SignupForm() {
  const dispatch=useDispatch()
  const navto=useNavigate()
  const [msg,setmsg]=useState('')
  const [formData, setFormData] = useState({
    id:'',
    first_name:'',
    Last_name:'',
    phone:'',
    email:'',
    password :'',
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paypal:'',
    zip: "",
    country: "",
    billingSame: false,
    paymentMethod: "card", 
  });
  
  const ClickHandler=()=>{ 
    if(formData.first_name=="" || formData.Last_name==""||formData.password==""||formData.email==""){
    setmsg('All fields re required !')
    }
    else{
      dispatch(singin(formData))
    navto(`/FormArtiste/formpay/${formData.email}`)
    }
    
  }

  const handleChange = (e) => {
   
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:value,
    });
  };

  return (
    <div className="flex justify-center item-center   w-full h-full">
      <div className="w-full h-full max-w-md bg-gray-200 mt-20 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-black">Sign up</h2>

        
        <form className="mt-6 space-y-4" onSubmit={(e)=>e.preventDefault()}>
          <div className="flex space-x-3">
            <input
              type="text"
              name="first_name"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 border p-2 rounded bg-gray-100 text-black"
            />
            <input
              type="text"
              name="Last_name"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 border p-2 rounded bg-gray-100 text-black"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded bg-gray-100 text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="example.email@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded bg-gray-100 text-black"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter at least 8+ characters"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded bg-gray-100 text-black"
          />
          <p className="text-red-600" >{msg}</p>
          <button onClick={ClickHandler} className="w-full bg-yellow-500 text-white p-3 rounded-lg font-semibold">
            Next 
          </button>
        </form>

       
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Log in</span>
        </p>

        
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <p className="px-3 text-gray-500">OR</p>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        
        <div className="flex justify-center space-x-4">
          <button className="bg-red-600 text-white p-3 rounded-full">
            <FaGoogle />
          </button>
          <button className="bg-blue-600 text-white p-3 rounded-full">
            <FaFacebookF />
          </button>
          <button className="bg-black text-white p-3 rounded-full">
            <FaApple />
          </button>
        </div>
      </div>
    </div>
  );
}
