import React from "react"
import { Grid } from "react-bootstrap"
import { ReactRpg } from 'react-rpg';

const images = [
  {
    url: "absolute url to the src of the image",
    clickHandler: (url, obj) => { console.log(url) }
  },
  {
    url: "http://images.com/myimage.jpg",
    clickHandler: (url, obj) => { console.log(obj) }
  }
];


class Dashboard extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      images: [
        {
          url: "http://image.vsco.co/1/52d992e43ad70287923/53ab2a3a74670831708b4749/vsco_062514.jpg",
          clickHandler: (url, obj) => { console.log(url) }
        },
        {
          url: "http://im.vsco.co/1/52d992e43ad70287923/53ab26fd75670897318b464c/vsco_062514.jpg?w=300&dpr=2",
          clickHandler: (url, obj) => { console.log(obj) }
        },
        {
          url: "http://james-oldfield.github.io/thailand/images/girl.adc2e72a.jpg",
          clickHandler: (url, obj) => { console.log(url) }
        },
        {
          url: "http://im.vsco.co/1/52d992e43ad70287923/53ab26b87267089b1d8b456f/vsco_062514.jpg?w=300&dpr=2",
          clickHandler: (url, obj) => { console.log(url) }
        },
        {
          url: "http://im.vsco.co/1/52d992e43ad70287923/53ab27657467082f588b4939/vsco_062514.jpg?w=300&dpr=2",
          clickHandler: (url, obj) => { console.log(url) }
        },
        {
          url: "http://im.vsco.co/1/52d992e43ad70287923/545e7bab7567081e158b4575/vsco_110814.jpg?w=300&dpr=2",
          clickHandler: (url, obj) => { console.log(url) }
        }
      ]
    };
  }

  render(){
    return(
      <div>
        <Grid bsClass="container">
          <ReactRpg imagesArray={this.state.images} columns={[ 1, 2, 3 ]} padding={10} />
        </Grid>
      </div>
    );
  }
}

export default Dashboard;