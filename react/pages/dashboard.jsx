import React from "react"
import { Grid } from "react-bootstrap"
import Gallery from 'react-photo-gallery';


class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      openLightBox: false,
      photoSet: [
    {
      src: 'https://indianflag.co.in/wp-content/uploads/2016/12/2.jpg',
      srcset: [
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHG9N_StKDx4rNaA44VhAsbFNza5mHitRGoivhULhzAQx46FBxoA',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHG9N_StKDx4rNaA44VhAsbFNza5mHitRGoivhULhzAQx46FBxoA',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHG9N_StKDx4rNaA44VhAsbFNza5mHitRGoivhULhzAQx46FBxoA',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHG9N_StKDx4rNaA44VhAsbFNza5mHitRGoivhULhzAQx46FBxoA'
      ],
      sizes:[
        '(min-width: 480px) 50vw',
        '(min-width: 1024px) 33.3vw',
        '100vw'
      ],
      width: 681,
      height: 1024,
      alt: 'image 1',
    },
    {
      src: 'http://www.hdwallpapery.com/static/images/Amazing_Bike_Stunt_Images_YMMeTtq.jpg',
      srcset: [
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-dRuRFtRl0R25llrX3gF3xIWUN6vcoaenBiZ24rObHwpXwwwdLQ',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-dRuRFtRl0R25llrX3gF3xIWUN6vcoaenBiZ24rObHwpXwwwdLQ',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-dRuRFtRl0R25llrX3gF3xIWUN6vcoaenBiZ24rObHwpXwwwdLQ',
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS-dRuRFtRl0R25llrX3gF3xIWUN6vcoaenBiZ24rObHwpXwwwdLQ'
      ],
      sizes:[
        '(min-width: 480px) 50vw',
        '(min-width: 1024px) 33.3vw',
        '100vw'
      ],
      width: 600,
      height: 600,
      alt: 'image 2',
    }
  ]
    }
  }

  render(){
    return(
      <div>
        <Grid bsClass="container">
          <Gallery photos={this.state.photoSet} onClickPhoto={this.state.openLightBox}/>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;