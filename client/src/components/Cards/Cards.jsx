
import Card from '../Card/Card'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllVideogames } from '../../redux/actions'
import './Cards.css'
import {Link} from 'react-router-dom'

class Cards extends Component {

  componentDidMount() {
    this.props.getAllVideogames()
    console.log(this.props.vgToShow)
  }
  render() {
    return (
      <div className='cards-container'>
        {this.props.vgToShow.map(vg => 
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
}

function mapStateToProps(state){
  return {
    videogames: state.videogames
  }
}
export default connect(mapStateToProps, {getAllVideogames})(Cards)