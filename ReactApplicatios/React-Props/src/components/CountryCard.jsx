import React, { Component } from 'react'

export default class CountryCard extends Component {
  render() {
    return (
      <React.Fragment>


        <div className="card">
            <img src={this.props.image} alt="Image is loading" />
            <div className="card-body">
             <div className="card-title">{this.props.title}</div>
             <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, voluptatibus!</p>
            </div>
        </div>

      </React.Fragment>
    )
  }
}
