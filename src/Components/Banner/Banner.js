// import React, { useState } from 'react'
import React, { useEffect, useState } from 'react';
import {API_KEY,imageURL} from '../../constants/constants'
import './Banner.css'
import axios from '../../Axios';

const Banner=() => {
 const [movies,setMovies] = useState()
 useEffect(()=>
 {
  axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>
{
  console.log(response.data.results[0]);
  setMovies(response.data.results[0])
})
})
    // const [movies,setMovies] = useState()
  return (
      
    <div style={{backgroundImage:`url(${movies ?imageURL+movies.backdrop_path: ''})`}} className='banner'>
    <div className='content'>
      <h1 className='title'>{movies ? movies.title : ""}</h1>
      <div className='banner_button'>
        <button className='button'>Play</button>
        <button className='button'>My List</button>
      </div>
      <h1 className='description'>{movies ? movies.overview : ""}</h1>
    </div>
    <div className="fade_bottom"></div>
  </div>
  )
}

export default Banner