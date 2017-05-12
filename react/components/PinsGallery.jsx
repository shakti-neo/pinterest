import React from "react";
import StackGrid, { transitions } from "react-stack-grid";
import { Image } from "react-bootstrap"

const { scaleDown } = transitions;

class PinsGallery extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <StackGrid
        appear={scaleDown.appear}
        appeared={scaleDown.appeared}
        enter={scaleDown.enter}
        entered={scaleDown.entered}
        leaved={scaleDown.leaved}
        monitorImagesLoaded = { true }
        columnWidth = { 250 }
      >
        { this.props.pins.map((pin) => {
        return(
        <div>
          <Image src = { "http://localhost:3000" + pin.pin_content.url } responsive />
          <p>{ pin.name }</p>
        </div>
        )
        }) }
      </StackGrid>
    );
  }
}

export default PinsGallery;