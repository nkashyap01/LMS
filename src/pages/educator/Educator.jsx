import React from 'react'
import { Outlet } from 'react-router-dom';

const Educator = () => {
  return (
    <div>
      <h2>Educator Page</h2>
      <Outlet /> {/* This will render the nested routes */}
    </div>
  )
}

export default Educator
