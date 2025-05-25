import React, {useState} from 'react'
import { Link } from "react-router-dom"

function CaptainSignup() {
  const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [userData,setUserData] = useState({})
  
    const submitHandler =(e)=>{
      e.preventDefault();
  
      setUserData(
        {
          username: {
            firstname: firstname,
            lastname: lastname,
          },
          email:email,
          password:password,
        }
      )
  
      console.log(userData);
      
  
      setFirstname("")
      setLastname("")
      setEmail("")
      setPassword("")
  
      
    }
    return (
      <div className="p-7 flex flex-col justify-between h-screen">
        <div>
          <img
          className="w-16 ml-8 mb-10"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
  
          <form action=""  onSubmit={(e)=>{submitHandler(e)}}>
            <h3 className="text-lg font-medium mb-2">what's your name</h3>
            <div className='flex gap-3 mb-4'>
                <input
              className="bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              name=""
              id=""
              required
              placeholder="firstname"
              value={firstname}
              onChange={(e)=>{setFirstname(e.target.value)}}
              
                />
                <input
              className="bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              name=""
              id=""
              required
              placeholder="lastname"
              value={lastname}
              onChange={(e)=>{setLastname(e.target.value)}}
              
                />
            </div>
            <h3 className="text-lg font-medium mb-2">What's your email</h3>
            <input
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="email"
              name=""
              id=""
              required
              placeholder="email@example.com"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              
            />
            <h3 className="text-lg font-medium mb-2">Enter password</h3>
            <input
              className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
              type="password"
              name=""
              id=""
              required
              placeholder="password"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              
            />
            <button className="bg-[#111] text-white mb-3 rounded px-4 py-2 border w-full text-lg">
              Captain Sign Up
            </button>
            
          </form>
          <p className="text-center">Already have account? <Link to="/captain-login" className="text-blue-600">Login here</Link></p>
        </div>
        <div>
           <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, labore?</p>
        </div>
  
      </div>
    )
}

export default CaptainSignup