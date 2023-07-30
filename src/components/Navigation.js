import React from 'react'
import './Components.css'
const Navigation = () => {
  return (
    <div>
        <nav className='nav-link'>
            <h2 className='title'>Daily dose of technology</h2>
            <div className='links'>
                <a href='/src/App.js' target='_blank'>Home</a>
                <a href='/src/pages/Posts.js' target='_blank'>Posts</a>
                <a href='/src/pages/SignInLogin.js' target='_blank'>Sign In/Login</a>
                <a href='/src/pages/Support.js' target='_blank'>Support</a>
            </div>
        </nav>
    </div>
  )
}

export default Navigation