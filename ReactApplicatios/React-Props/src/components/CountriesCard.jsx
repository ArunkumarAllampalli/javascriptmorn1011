import React, { Component } from 'react'
import CountryCard from './CountryCard'
import card_1 from './assets/images/card_1.jpg'
import card_2 from './assets/images/card_2.jpg'
import card_3 from './assets/images/card_3.jpg'
import card_4 from './assets/images/card_4.jpg'

export default class CountriesCard extends Component {
    
  render() {
    let array = ['India','China','USA','Russia']
    return (
      <React.Fragment>
        <div className="container">
            <div className="row mt-3">
                <div className="col-md-3">
                   <CountryCard image ={card_1} title={array[0]} />
                </div>
                <div className="col-md-3">
                    <CountryCard image={card_2}  title={array[1]}/>
                </div>
                <div className="col-md-3">
                    <CountryCard  image={card_3} title={array[2]}/>
                </div>
                <div className="col-md-3">
                    <CountryCard image={card_4} title={array[3]}/>
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
