import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {
  const {allCourses} = useContext(AppContext)
  return (
    <div>
      <h2 className="pt-16 md:px-40 px-8">Learn from the best</h2>
      <p className="text-sm md:text-base text-gray-500 mt-2">Discover our top-rated courses across various categories. From coding and design to <br/> business and wellness, our courses are crafted to deliver results.</p>

      <div className="grid grid-cols-auto px-12 md:px-20 my-10 gap-4"> 
     {allCourses.slice(0,4).map((course,index) => <CourseCard key={index} course={course}/>)}

      </div>

      <Link to={'/course-list'} onClick={()=>scrollTo(0,0)} className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'>Show all courses</Link>
      
    </div>
  )
}

export default CoursesSection
