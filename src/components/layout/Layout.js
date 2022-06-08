import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex flex-col grow">
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout