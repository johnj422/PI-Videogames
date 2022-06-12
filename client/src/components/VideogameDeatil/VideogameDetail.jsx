import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVgDetail} from '../../redux/actions'
import Navbar from '../Navbar/Navbar'



export default function VideogameDetail() {
  
  let {id} = useParams();
  
  let dispatch = useDispatch();

  useEffect(() => {
      dispatch(getVgDetail(id))
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
          <div>
            <h1>{detail.name}</h1>
          </div>

        
    </div>
  )
}
