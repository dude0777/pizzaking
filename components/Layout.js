import React from 'react'
import Footer from './footer'
import Navbar from './Navbar'
const Layout = ({children}) => {
  return (
    <>
<Navbar/>
{children}
<Footer/></>
  )
}

export default Layout