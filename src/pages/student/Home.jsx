import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-32 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <Hero/>
      <Companies/>
    </div>
  )
}

export default Home
