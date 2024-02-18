import React, { useState } from 'react'
import { signIn } from '../api/auth'
import { ToastContainer, toast } from 'react-toastify'
import Logo from '../assets/blue-logo.svg'
import Google from '../assets/google.svg'
import '../sass/index.scss'



export default function loginComponent() {
  const [credentials, setCredentials] = useState({})

  const register = async () => {
    try {
      let res = await signIn(credentials.email, credentials.password)
      console.log(res?.user);    
        toast.success('Sign-in successful!', {
          position: 'top-right',
          autoClose: 3000, // Close the toast after 3000 milliseconds (3 seconds)
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    } catch (error) {
      console.log(error)
      toast.error('Sign-in failed. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }
  return (
    <div className='wrapper'>
       <ToastContainer/>
       <img  src={Logo} alt="Logo" className='logo' />
      <div className='container'>
        <h1 className='heading'>Sign In</h1>
        <p  className='sub-heading'>Stay update your professional world</p>
        <input
          onChange={(event) => {
            setCredentials({ ...credentials, email: event.target.value })
          }}
          className='input'
          type="email"
          placeholder='Enter or Phone'
        />

        <input
          onChange={(event) => {
            setCredentials({ ...credentials, password: event.target.value })
          }}
          className='input'
          type="password"
          placeholder='Enter password'
        />
        <button onClick={register} className='btn signIn '>Sign In </button>
        <div className='line-wrapper'>
           <span className='line'></span>
           <span className='or-line'>or</span>
           <span className='line'></span>
        </div>
        <button onClick={register} className='btn gooleSign '> <img className='googleicon' src={Google} alt="google" />Sign In with Google </button>
      </div>
    </div>

  )
}

