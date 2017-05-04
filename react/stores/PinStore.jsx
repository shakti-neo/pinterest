import Alt from "../Alt.jsx"
import PinActions from "../actions/PinActions.jsx"

class PinStore{
  constructor(){
    this.exportPublicMethods({
      setState: this.setState
    });
    this.bindListeners({
    getPins: PinActions.getPins
    });
    this.pins_ready = false;
  }

  getPins(requestHeaders){
    this.pins_ready = true;
  }
}

export default Alt.createStore(PinStore, 'PinStore');