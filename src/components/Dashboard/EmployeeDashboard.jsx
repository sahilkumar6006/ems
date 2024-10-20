import React from 'react'
import Header from '../other/header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard() {
  return (
    <div className='  p=10 bg-[#1C1C1C] h-screen w-screen'>
    <Header/>
  <TaskListNumber/>
  <TaskList/>
    </div>
   
 
  )
}

export default EmployeeDashboard