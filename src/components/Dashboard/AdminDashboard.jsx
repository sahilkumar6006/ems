import React from 'react'
import Header from '../other/header'
import AllTask from '../other/AllTask'

function AdminDashboard() {
  return (
    <div className='h-screen w-full p-10'>
        <Header/>
        <div className='bg[#1c1c1c]'>
            <form className='flex  flex-wrap items-start justify-between w-full  bg-[#1C1C1C] p-6'>

                <div className='w-1/2'>
                <div>
                <h3>Task Title</h3>
                <input type='text' placeholder='Task Title'className='border-2 padrounded-full  text-white outline-none bg-transparent placeholder:text-white'/>
                </div>
                <div>
                <h2  >Date</h2>
                <input type='date' placeholder='employe name' className='border-2 padrounded-full  text-white outline-none bg-transparent placeholder:text-white'/>
                </div>   
                <div>
                <h3>Assign To</h3>
                <input type='text' placeholder='employe name' className='border-2 padrounded-full py-3 px-5 text-white outline-none bg-transparent placeholder:text-white'/>
                </div>   
               <div>
               <h3>Category</h3>
               <input type="text"  placeholder='design dev etc' className='border-2 border-white padrounded-full  text-xl text-white mt-3 outline-none bg-transparent placeholder:text-white'/>
               </div>
                </div> 
               <div className='w-1/2'>
               <h3>Description</h3>
               <textarea  className='w-full h-44 text-sm py-2 px-4 rounded outline-none' name=' ' id='' cols="30" rows='10 '></textarea>
               </div>
                <button className='bg-emerald-500 hover:bg-emerald-600 px-20 rounded text-sm mt-4 w-full p-3'>Create Task</button>
            </form>
        </div>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard