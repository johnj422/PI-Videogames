import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from 'react'
import Cards from "../Cards/Cards.jsx";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";



export default function Home() {
  
  const videogames = useSelector(state => state.videogames);
  const VG_PER_PAGE = 15
  const nextHandler = () => {console.log('nextHandler')}
  const prevHandler = () => {console.log('prevHandler')}
  
  const [vgData, setVgData] = useState(videogames);
  const [items2, setItems] = useState([...videogames].splice(0, VG_PER_PAGE))


  return (
    <div>
      <Navbar />
      <Pagination 
        currentPage={0}
        videogames={items2}
        prevHandler={prevHandler}
        nextHandler={nextHandler} 
        />
      <Cards />
    </div>
  )
}

