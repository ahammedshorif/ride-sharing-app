import React from 'react'
import { Link } from 'react-router-dom'

function UserSignup() {
  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-14 ml-8 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <form action="" >
          <h3 className="text-lg font-medium mb-2">what's your name</h3>
          <div className='flex gap-3 mb-4'>
              <input
            className="bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            type="text"
            name=""
            id=""
            required
            placeholder="firstname"
            
              />
              <input
            className="bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            type="text"
            name=""
            id=""
            required
            placeholder="lastname"
            
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
            
          />
          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            name=""
            id=""
            required
            placeholder="password"
            
          />
          <button className="bg-[#111] text-white mb-3 rounded px-4 py-2 border w-full text-lg">
            SignIn
          </button>
          
        </form>
        <p className="text-center">Already have account? <Link to="/login" className="text-blue-600">Login here</Link></p>
      </div>
      <div>
         <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, labore?</p>
      </div>

    </div>
  )
}

export default UserSignup