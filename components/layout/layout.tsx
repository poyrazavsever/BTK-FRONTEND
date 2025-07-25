import React from 'react'
import Navbar from './navigations/navbar';
import Footer from './navigations/footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen font-poppins'>
      <Navbar />

      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout
