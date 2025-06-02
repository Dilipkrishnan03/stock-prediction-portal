import React from 'react'

const button = (props) => {
  return (
    <>
        <a className={`btn ${props.class}`} to={props.url}>{props.text}</a>
    </>
   
  )
}

export default button
