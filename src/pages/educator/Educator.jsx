import React from 'react'
import { Outlet } from 'react-router-dom';

const Educator = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="md:text-5xl text-3xl font-bold text-gray-800 mb-6">
          Meet Our <span className="text-[#2563EB]">Expert Educators</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Our instructors are experienced professionals and passionate teachers
          from across industries, bringing real-world expertise into every course.
        </p>
      </div>
    </div>
  )
}

export default Educator
