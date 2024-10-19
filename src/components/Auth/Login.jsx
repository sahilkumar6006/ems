import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("email is", email);
        console.log("password is", password);
        setEmail('')
        setPassword('')
    }


    return (
        <div
            className='flex items-center justify-center h-screen w-screen'
        >
            <div className='border-2 border-emerald-600 p-20 rounded-xl'  >
                <form

                    onSubmit={(e) => { submitHandler(e) }

                    }
                    className='flex flex-col items-center justify-center'>
                    <input
                        value={email}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setEmail(e.target.value)
                        }}
                        required type='email' placeholder='Enter you email' className='border-2 border-emerald-600 padrounded-full py-3 px-5 text-xl text-white outline-none bg-transparent placeholder:text-white' />
                    <input required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        type='password' placeholder='Enter your password' className='border-2 border-emerald-600 padrounded-full py-3 px-5 text-xl text-white mt-3 outline-none bg-transparent placeholder:text-white' />
                    <button className=' bg-emerald-600 padrounded-full py-3 px-5 text-xl text-white outline-none  placeholder:text-white mt-5 '>Login</button>
                </form>


            </div>

        </div>
    )
}

export default Login