import React from 'react'

function Header({data}) {
  return (
    <>
 
    <div className='flex items-end justify-between'>
    <h1 className=' text-2xl'>hello <br/> <span className='text-2xl'>{data.email} </span>👋</h1>
    <button className='bg-red-600 text-lg font-medium text-white rounded-md m-5 p-3'>Logout</button>
    </div>
    </>
  )
}

export default Header