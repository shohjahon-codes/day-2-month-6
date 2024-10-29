import React from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
    <header className='p-[5px] bg-blue-500'>

    </header>
    <main><Outlet/></main>
    
    </>
  )
}
