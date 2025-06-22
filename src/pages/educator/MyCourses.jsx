import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';

const MyCourses = () => {
  const {currency, allCourses} = useContext(AppContext);
  const [courses, setCourses] = useState(null)
  const fetchEducatorCourses = () =>{
    setCourses(allCourses)
  }

  useEffect(()=>{
    fetchEducatorCourses()
  }, [])

  return courses ? (
    <div className="h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0">
      <div className="w-full">
        <h2 className="pb-4 text-lg font-medium text-black">My Course</h2>
        <div>
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900" border-b border-gray-500 text-sm text-left >
            <tr className="text-gray-900"> 
              <th className=" pr-4 py-3 font-semibold truncate">All courses</th>
              <th className=" py-3 font-semibold truncate">Earnings</th>
              <th className=" py-3 font-semibold truncate">Students</th>
              <th className=" py-3 font-semibold truncate">Published On</th>
            </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {courses.map((course) => (
                <tr key={course._id} className="border-b border-gray-500/20">

                <td className=" md:pl-6 py-3 flex items-center space-x-3 truncate px-5">
<img src={course.courseThumbnail} alt="course Image" className="w-16" />
<span className="truncate hidden md:block">{course.courseTitle}</span>
                </td>
<td className="pl-6 py-3">{currency} {Math.floor(course.enrolledStudents.length * (course.coursePrice - course.discount * course.coursePrice / 100))}</td>

<td className="pl-12 py-3">{course.enrolledStudents.length}</td>

<td className="pl-20 py-3">
  {new Date(course.createdAt).toLocaleDateString()}
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : <Loading />
}

export default MyCourses
