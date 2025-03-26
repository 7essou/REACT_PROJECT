import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./silce";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const dispatch=useDispatch()
 
  const users = useSelector(s=>s.data.users)
  const navto = useNavigate()
  const [msg,setmsg]=useState('')
  const [user,setuser]=useState({
    email:'',password:''
  })
  useSelector(s=>s.data.users).map(e=>{
    console.log(e)
  })

  const clickHandler = async ()=>{
   const reponse= await dispatch(login(user))   
    if(reponse && users.find(e=>e.email==user.email)){
      navto(`/artists/user/${users.find(e=>e.email==user.email).id}`)
    }
    else{
    setmsg('Email or Password inccorect')
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">Hello.</h2>
        <p className="text-gray-500 mb-6">Welcome back</p>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <div className="relative">
            <input
            onChange={(e)=>setuser({...user,email:e.target.value})}
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border rounded mt-1 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Password</label>
          <div className="relative">
            <input
             onChange={(e)=>setuser({...user,password:e.target.value})}
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded mt-1 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <p>{msg}</p>
        </div>
        <button onClick={clickHandler} className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition">
          Login In
        </button>

        
        <div className="text-center my-4 text-gray-500 text-sm">OR CONTINUE WITH</div>

       
        <div className="flex justify-center gap-4 mb-4">
          <button className="p-2 rounded-full bg-orange-500 text-white">
            <FaGoogle />
          </button>
          <button className="p-2 rounded-full bg-blue-600 text-white">
            <FaFacebookF />
          </button>
          <button className="p-2 rounded-full bg-black text-white">
            <FaApple />
          </button>
        </div>

       
        <p className="text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <a href="#" className="text-yellow-500 font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
