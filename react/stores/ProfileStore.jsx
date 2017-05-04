import Alt from "../Alt.jsx";
import ProfileActions from "../actions/ProfileActions.jsx"
import axios from "axios"

class ProfileStore {
  constructor(){
    this.bindListeners({
      getUserDetails: ProfileActions.getUserDetails
    });
  }

  getUserDetails(email){
  }
}

export Alt.createStore(ProfileStore);