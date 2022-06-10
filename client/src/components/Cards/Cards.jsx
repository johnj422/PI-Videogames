
import Card from '../Card/Card'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllVideogames } from '../../redux/actions'
import styles from './Cards.css'

class Cards extends Component {

  componentDidMount() {
    this.props.getAllVideogames()
  }
  render() {
    return (
      <div className='cards-container'>
        {this.props.videogames.map(vg => 
          <Card 
            image={vg.background_image}
            name={vg.name}
            genres={vg.genres}
          />
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