import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AuthContext from './context/AuthContext'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

function App() {
const [user, setUser] = useState(null);

const handleLogin = (email, password) => {
console.log('in the handlelogin', email, password)
  if (email === 'admin@me.com' && password === '123') {
    setUser('admin')
  } else if (email === 'user@me.com' && password === '123') {
  setUser('employee')
  } else {
    alert("invalid credentials");
  }
}


handleLogin('admin@me.com', 123);

  useEffect(() => {
    // setLocalStorage();
    getLocalStorage()
  }, []);

  return (
   <>
   {!user ? <Login handleLogin = {handleLogin} /> : ''}
   {/* <EmployeeDashboard/> */}
   {/* <h1>hello</h1> */}
   {/* <AdminDashboard/> */}

   </>
  )
}

export default App