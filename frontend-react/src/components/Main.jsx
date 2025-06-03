import React from 'react'
import Headers from './header'
import Footer from './Footer'
import button from './button'

const main = () => {
  return (
    <>
    
    <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded-3'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead'>Welcome to the Stock Prediction Portal, where you can predict stock prices using machine learning models.</p>
            <p className='text-light lead'>To get started, please login or register.</p>
            <a className='btn btn-outline-warning' href="Login">Login</a>
        </div>
        
    </div>
    
    </>
  )
}

export default main
