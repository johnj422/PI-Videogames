import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from 'react'
import Cards from "../Cards/Cards.jsx";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../redux/actions";


export default function Home() {
  
  const dispatch = useDispatch();
  const allVG = useSelector((state) => state.videogames);

  const [currentPage, setCurrentPage] = useState(1);
  const [VGperPage, setVGperPage] = useState(15);
  const indexOfLastVD = currentPage * VGperPage;
  const indexOfFirstVG = indexOfLastVD - VGperPage;
  const currentVG = allVG.slice(indexOfFirstVG, indexOfLastVD);
  //console.log(currentVG)
  const paginating = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  useEffect(() => {
    dispatch(getAllVideogames());
  }, [dispatch])

  

  return (
    <div>
      <Navbar />
      <Cards 
        vgToShow={currentVG}
      />
      <Pagination
        VGperPage={VGperPage}
        allVG={allVG.length}
        paginating={paginating}
        currentPage={currentPage}
      />
    </div>
  )
}

