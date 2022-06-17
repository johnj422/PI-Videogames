import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVgDetail, resetDetail} from '../../redux/actions'
import Navbar from '../Navbar/Navbar'
import s from './VideogameDetail.module.css'



export default function VideogameDetail() {
  
  let {id} = useParams();
  
  let dispatch = useDispatch();

  useEffect(() => {
      dispatch(getVgDetail(id))
      return () => {
        dispatch(resetDetail()) 
      }
  }, [dispatch])
  const detail = useSelector(state => state.vgDetail )
  // function matchReg (str) {
  //   let reg = /['"]+/g;
  //   return str.replace(reg, '');
  // }
  // const detailToShow = detail.replace(/['"]+/g, '')
  // console.log(detailToShow)

  return (

    <div>
      <Navbar />
        <div className={s.container}>
          <div className={s.title}>
            <img className={s.titleImg} src='https://i.postimg.cc/Jzt1ZVmF/Play-7.png' alt="title-Img" />
          </div>
          <div className={s.image}>
               <img src={detail.background_image} alt="VG Image" />
          </div>
          <div class={s.info}>
            <div class={s.gameTitle}>
              <h1>{detail.name}</h1>
            </div>
            <div class={s.rating}>
              <h2>Rating: {detail.rating}</h2>
            </div>
            <div class={s.released}>
              <h3>Release Date: {detail.released}</h3>
            </div>
            <div class={s.platforms}>
              <h4>Platforms:</h4> 
                <div className={s.platformsList}>   
                  {detail.platforms?.map(g =>
                    <p> - {g}</p>
                    )}
                </div>
            </div>
            <div class={s.genres}>
              <h4>Genres:</h4>
                <div className={s.genresList}>
                  {detail.genres?.map(g =>
                  <p> - {g.name}</p>
                  )}
                </div>
            </div>
          </div>
          <div class={s.description}>
            
          </div>
          {/* <div className={s.card}>
            <div className={s.detailContainer}>
              <div className={s.imgContainer}>
               
              </div>
            </div>
              <div className={s.detailRight}>
                
                <h1>{detail.name}</h1>
                <h2>Rating: {detail.rating}</h2>
                <div className='info'>
                
                  <h3>Release Date: {detail.released}</h3>
                  <h4>Platforms:</h4>
                  <div className='info-bottom'>
                    <div className='platforms'>
                      
                      {detail.platforms?.map(g =>
                        <p> - {g}</p>
                        )}
                    </div>
                    <h4>Genres:</h4>
                    <div className='genres'>
                      
                    {detail.genres?.map(g =>
                      <p> - {g.name}</p>
                      )}
                    </div>
                  </div>

                </div>
                

              </div>
              <div className='description'>
                <p>
                  Game description: {detail.description}
                </p>
              </div>
          </div> */}
        </div>
    </div>
        
    
  )
}
