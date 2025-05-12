import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        
        <div className='bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-red-300 h-screen w-full flex justify-between flex-col pt-8'>
            <img className='w-14 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white px-4 py-4 pb-6'>
                <h2 className='text-2xl font-bold'>Get Started With Uber</h2>
                <Link to="/login" className=' flex justify-center items-center w-full text-white bg-black rounded py-3 mt-4'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home