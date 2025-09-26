import React, { Component } from 'react'
import Card_1 from './assets/images/card_1.jpg';
import Card_2 from './assets/images/card_2.jpg';
import Card_3 from './assets/images/card_3.jpg';
import Card_4 from './assets/images/card_4.jpg';  
export default class MyComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-3">
                    <div className="card">
                        <img src={Card_1} alt="Img loading" className='img-fluid' />
                        <div className="card-body">
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum est unde quis iure eaque?</p>
                            <button className='btn btn-primary btn-sm'>ReadMore</button>
                        </div>
                    </div>
                </div>
                 <div className="col-md-3">
                    <div className="card">
                        
                        <img src={Card_2} alt="Img loading" className='img-fluid' />

                        <div className="card-body">
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum est unde quis iure eaque?</p>
                            <button className='btn btn-primary btn-sm'>ReadMore</button>
                        </div>
                    </div>
                </div>
                 <div className="col-md-3">
                    <div className="card">
                        
                        <img src={Card_3} alt="Img loading" className='img-fluid' />

                        <div className="card-body">
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum est unde quis iure eaque?</p>
                            <button className='btn btn-primary btn-sm'>ReadMore</button>
                        </div>
                    </div>
                </div>
                 <div className="col-md-3">
                    <div className="card">
                        
                        <img src={Card_4} alt="Img loading" className='img-fluid' />

                        <div className="card-body">
                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatum est unde quis iure eaque?</p>
                            <button className='btn btn-primary btn-sm'>ReadMore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
