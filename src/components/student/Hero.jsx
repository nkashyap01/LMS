import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div >
      <h1 className="md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto ">Empower your future with the 
      courses designed to <span className="text-[#2563EB]
">fit your choice.</span>
<img src={assets.sketch} alt="sketch" className="md:block hidden absolute -bottom-7 right-0 z-0" />
</h1>
<p className="md:block hidden text-gray-500 max-w-2xl mx-auto relative z-10"> We bring together world-class instructors, interactive content, and a supportive
community to help you achieve your personal and professional goals. </p>

<p className="md:hidden text-gray-500 max-w-sm mx-auto"> We bring together world-class instructors, interactive content, and a supportive
community to help you achieve your personal and professional goals. </p>

<SearchBar/>

    </div>
  )
}
export default Hero
