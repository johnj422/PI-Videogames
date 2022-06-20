import Navbar from "../Navbar/Navbar";
import React, { useEffect, useState } from 'react'
import Cards from "../Cards/Cards.jsx";
import Pagination from "../Pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllVideogames } from "../../redux/actions";
import s from './Home.module.css'
import Loader from "../Loader/Loader";




export default function Home() {
  
  const dispatch = useDispatch();
  const allVG = useSelector((state) => state.videogames);
  const searchedVG = useSelector((state) => state.searched);
  const loader = useSelector(state => state.loader)
  //console.log(searchedVG)

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
    <div className={s.main}>
      <Navbar
        setCurrentPage={setCurrentPage}
      />
      <body>
        <Cards 
          currentVG={currentVG}
          searchedVG={searchedVG}
        />
      </body>
      {!loader? 
      <Pagination
        VGperPage={VGperPage}
        allVG={allVG.length}
        paginating={paginating}
        currentPage={currentPage}
      />
      :null
      }
    </div>
  )
}

