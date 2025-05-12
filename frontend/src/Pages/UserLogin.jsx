import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserLogin() {
  const [email,setEmail]= useState("");
  const [password, setpassword] = useState("");
  const [userData,setUserData]= useState({});

  const submitHandler =(e)=>{
    e.preventDefault();
    setUserData({
      email:email,
      password:password,
    })
    console.log(userData);
    

    setEmail("");
    setpassword("");
    
  }
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-14 ml-8 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form action="" onSubmit={(e)=>{submitHandler(e)}}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            name=""
            id=""
            required
            placeholder="email@example.com"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            
          />
          <h3 className="text-lg font-medium mb-2">What's your password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            name=""
            id=""
            required
            placeholder="password"
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}
          />
          <button className="bg-[#111] text-white mb-3 rounded px-4 py-2 border w-full text-lg">
            Login
          </button>
          
        </form>
        <p className="text-center">New here? <Link to="/signup" className="text-blue-600">Create New User Account</Link></p>
      </div>
      <div>
        <Link to="/captain-login" className="bg-green-500 flex justify-center items-center text-white mb-7 rounded px-4 py-2 border w-full text-lg">Sign in as Captain</Link>
      </div>

    </div>
  );
}

export default UserLogin;
