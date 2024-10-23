import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import {AuthContext} from './context/AuthProvider'

function App() {
  const [user, setUser] = useState(null);
  const [loginInUserData, setLoggedInUserData] = useState(null);
  useEffect(() => {
    setLocalStorage();
    // getLocalStorage()
  }, []);

  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    console.log('in the handlelogin', email, password);
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'admin'}));
    } else if (authData  
    ) {
      const employee = authData.employees.find((e) => 
        email === e.email && e.password === password)
      setUser('employee');
      setLoggedInUserData(employee);
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}));
    } else {
      alert("invalid credentials");
    }
  }

  useEffect(() =>{
const loggedInUser = localStorage.getItem("LoggedInUser");
console.log("in the loggedInUser", loggedInUser);
  }, [authData])

  console.log("in sthe logininduser data", loginInUserData)


  return (
   <>
     {!user ? <Login handleLogin={handleLogin} /> : null}
     {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard data={loginInUserData} />}
   </>
  )
}

export default App;
