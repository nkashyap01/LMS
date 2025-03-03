import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import {useNavigate} from 'react-router-dom'

const SearchBar = ({data}) => {

  const navigate = useNavigate()

  const [input, setInput] = useState(data ? data: '')
  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate('/course-list/' + input)
  }


  return (
    <div className="my-5">
      <form onSubmit= {onSearchHandler} className="max-w-3xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded">
        <img src={assets.search_icon} alt="search_icon" className="md:w-auto w-10 px-3"/>
        <input onChange = {e => setInput(e.target.value)} value={input} type="text" placeholder='search for courses' className="w-full h-full outline-none text-gray-500/80"/>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold md:px-10 px-7 md:py-3 py-2"> Search </button>
      </form>
    </div>
  )
}

export default SearchBar
