import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
const Layout = ({ children }) => {

  return (
    <>
      <Navbar />
      {/* <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> */}
      {children}
      <Footer />
    </>
  )
}

export default Layout
