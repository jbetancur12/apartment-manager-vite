import React from 'react'
import { useLocation } from 'react-router-dom'

const Tenant = (): JSX.Element => {
  const { state } = useLocation()

  console.log(state)
  return (
    <>
      <div>Tenant</div>
    </>
  )
}

export default Tenant
