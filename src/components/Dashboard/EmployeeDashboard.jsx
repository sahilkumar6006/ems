import React from 'react'
import Header from '../other/header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

  return (
    <div className='  p=10 bg-[#1C1C1C] h-screen w-screen'>
    <Header data={data}/>
  <TaskListNumber data= {data}/>
  <TaskList/>
    </div>
   
 
  )
}

export default EmployeeDashboard