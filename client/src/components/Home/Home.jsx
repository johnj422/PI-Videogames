import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from 'react'
import Cards from "../Cards/Cards.jsx";
import Pagination from "../Pagination/Pagination";
import { useSelector } from "react-redux";



export default function Home() {
  
  const videogames = useSelector(state => state.videogames);
  const VG_PER_PAGE = 15
  
  const [vgData, setVgData] = useState(videogames);
  const [items2, setItems] = useState([...videogames].splice(0, VG_PER_PAGE))
  const [currentP, setCurrentPage] = useState(1)
  const nextHandler = () => {
    const totalShown = videogames.length
    const nextPage = currentP+1
    const firstIndex = currentP * VG_PER_PAGE 
    if(firstIndex === totalShown) return
    setItems([...videogames].splice(firstIndex, VG_PER_PAGE))
    setCurrentPage(nextPage)
  }
  const prevHandler = () => {console.log('prevHandler')}

  return (
    <div>
      <Navbar />
      <Pagination 
        currentPage={currentP}
        videogames={items2}
        prevHandler={prevHandler}
        nextHandler={nextHandler} 
        />
      <Cards />
    </div>
  )
}

