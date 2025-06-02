import React from 'react'
import Button from './button' 
const header = () => {
  return (
    <>
    <nav className='navbar container pt-3 pb-3 align-items-start'>
        <a className='navbar-brand text-light' href=''>Stock Prediction Portal</a>
        <div>
            <Button text='Login' class="btn-outline-info" url="/login" />
            &nbsp;
            <Button text='Register' class="btn-info" url="/register" />
            
        </div>
    </nav>
    </>
  )
}

export default header
