import React from 'react'
import { Route, Routes } from 'react-router-dom'

import MainCards from '../MainCards/MainCards'
import Menu from '../Menu/Menu'
import Tenants from '../Tenants/Tenants'
import './Main.scss'

const Main = (): JSX.Element => {
  return (
    <main className="Main">
      <Menu />
      <section className="Main-cards">
        <Routes>
          <Route path="/" element={<MainCards />} />
          <Route path="tenants" element={<Tenants />} />
        </Routes>
      </section>
    </main>
  )
}

export default Main
