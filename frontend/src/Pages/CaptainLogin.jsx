import React,{useState} from 'react'
import { Link } from 'react-router-dom';

function CaptainLogin() {
    const [email,setEmail]= useState("");
    const [password, setpassword] = useState("");
    const [captainData,setCaptainData]= useState({});

      const submitHandler =(e)=>{
        e.preventDefault();
        setCaptainData({
            email:email,
            password:password,
    })
    console.log(captainData);
    

    setEmail("");
    setpassword("");
    
  }
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 ml-8 mb-10"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
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
        <p className="text-center">New here? <Link to="/captain-signup" className="text-blue-600">Register as a Captain</Link></p>
      </div>
      <div>
        <Link to="/login" className="bg-orange-500 flex justify-center items-center text-white mb-7 rounded px-4 py-2 border w-full text-lg">Sign in as User</Link>
      </div>

    </div>
  )
}

export default CaptainLogin