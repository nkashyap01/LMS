import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CoursesSection from '../../components/student/CoursesSection'
import TestimonialsSection from '../../components/student/TestimonialsSection'
import CallToAction from '../../components/student/CallToAction'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-32 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
      <Hero/>
      <Companies/>
      <CoursesSection/>
      <TestimonialsSection/>
      <CallToAction/>
    </div>
  )
}

export default Home
