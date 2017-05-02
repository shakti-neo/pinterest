import Alt from "../Alt.jsx";
import LoginActions from "../actions/LoginActions.jsx";
import axios from "axios";
import { browserHistory } from "react-router";
import Header from "../shared/Header.jsx"

class LoginStore{
  constructor(){
    this.exportPublicMethods({
      setState: this.setState
    });
    this.responseHeaders = {};
    this.authenticated = false;
    this.bindListeners({
    sendRequest: LoginActions.sendRequest,
    checkExpiration: LoginActions.checkExpiration,
    clearSession: LoginActions.clearSession
    });
  }

  sendRequest(credentials){
    axios.post('http://localhost:3000/auth/sign_in', {
    email: credentials.email,
    password: credentials.password
  })
  .then((response) => {
    this.setState({
      responseHeaders: response.headers,
      authenticated: true
    });
    browserHistory.push('/dashboard');
  })
  .catch((error) => {
    console.log(error);
  });
  }

  clearSession(boolean){
    this.authenticated = boolean;
    this.responseHeaders = {};
  }

  checkExpiration(date){
    if( this.responseHeaders.expiry && this.responseHeaders.expiry < date ){
      return false
    }
    else{
      return true
    }
  }

}

export default Alt.createStore(LoginStore, 'LoginStore');
