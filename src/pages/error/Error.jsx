import React from 'react'
import "./error.css"
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div className="errorPage">
      <h2>This is Error page</h2>
      <button><Link to="/">Home</Link></button>
    </div>
    </>
  )
}

export default Error
