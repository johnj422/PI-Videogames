
import Card from '../Card/Card'
import React, { Component, useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { getAllVideogames, resetCards } from '../../redux/actions'
import './Cards.css'
import {Link} from 'react-router-dom'
import Loader from '../Loader/Loader'


export default function Cards() {

  const vgToShow = useSelector (state => state.videogames);
  const dispatch = useDispatch();
  const loader = useSelector (state => state.loader);

  useEffect(() => {
    if(!loader){
      dispatch(getAllVideogames())
    }
  
    return () => {
      dispatch(resetCards())
    }
  }, [])
  


  return (
          <div className='cards-container'>
            {loader?
              <Loader />
              :vgToShow?.map(vg => 
              <Link className='link' to={`/detail/${vg.id}`} 
                style={{ textDecoration: 'none' }}>
                <Card 
                  image={vg.background_image}
                  name={vg.name}
                  genres={vg.genres}
                />
              </Link>
              
            )}
          </div>
        )
      }
    


// export class Cards extends Component {
  
//   componentDidMount() {
//     // this.props.getAllVideogames()
//     //console.log(this.props)
//   }
//   componentWillUnmount(){
//     this.props.resetCards()
//   }
  
//   render() {
//     return (
//       <div className='cards-container'>
//         {this.props.vgToShow?.map(vg => 
//           <Link className='link' to={`/detail/${vg.id}`} 
//             style={{ textDecoration: 'none' }}>
//             <Card 
//               image={vg.background_image}
//               name={vg.name}
//               genres={vg.genres}
//             />
//           </Link>
//         )}
//       </div>
//     )
//   }
// }

// function mapStateToProps(state){
//   return {
//     videogames: state.videogames
//   }
// }
// export default connect(mapStateToProps, {getAllVideogames, resetCards})(Cards)