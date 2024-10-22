import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import {AuthContext} from './context/AuthProvider'

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
    setLocalStorage();
    // getLocalStorage()
  }, []);

  const authData = useContext(AuthContext)
  console.log(authData.employees);
  return (
   <>
   {!user ? <Login handleLogin = {handleLogin} /> : ''}
    {user == 'admin'? <AdminDashboard/> : <EmployeeDashboard/>}
   </>
  )
}

export default App