import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVgDetail, resetDetail} from '../../redux/actions'
import Loader from '../Loader/Loader'
import Navbar from '../Navbar/Navbar'
import s from './VideogameDetail.module.css'



export default function VideogameDetail() {
  
  const loader = useSelector((state)=>state.loader);

  let {id} = useParams();
  
  let dispatch = useDispatch();

  useEffect(() => {
    if(!loader){
      dispatch(getVgDetail(id))
    }
      return () => {
        dispatch(resetDetail()) 
      }
  }, [dispatch])
  const detail = useSelector(state => state.vgDetail )


  return (

    <div>
      <Navbar />
        {loader? 
        <Loader />
        :<div 
          background_image={`url()`}
          className={s.container}>
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

        </div>
        }
    </div>
        
    
  )
}
