import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainCards from '../Components/MainCards/MainCards'
import Menu from '../Components/Menu/Menu'
import Tenants from '../Components/Tenants/Tenants'
import Tenant from '../Pages/Tenant'
import './Main.scss'

const Main = (): JSX.Element => {
  return (
    <main className='Main'>
      <Menu />
      <section className='Main-cards'>
        <Routes>
          <Route path='/' element={<MainCards />} />
          <Route path='tenants' element={<Tenants />} />
          <Route path='tenant/:id' element={<Tenant />} />
        </Routes>
      </section>
    </main>
  )
}

export default Main
