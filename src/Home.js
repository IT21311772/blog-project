import React, { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'

function Home() {
  const { data, error, isPending } = useFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='loading'>Loading ....</div>}
      {data && <BlogList data={data} title="Food Gallery" />}
      {/* <BlogList blogs={blogs.filter((blog) => blog.title === 'Chicken Biriyani')} title="Rice and Biriyani" /> */}
    </div>
  )
}

export default Home
