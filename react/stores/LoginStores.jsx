import Alt from "../Alt.jsx";
import LoginActions from "../actions/LoginActions.jsx";
import axios from "axios";
import { browserHistory } from "react-router";
import Header from "../shared/Header.jsx"

class LoginStore{

  constructor(){
    this.responseHeaders = JSON.parse(localStorage.getItem('responseHeaders')) || {};
    this.bindListeners({
      sendRequest: LoginActions.sendRequest,
      checkExpiration: LoginActions.checkExpiration,
      logout: LoginActions.logout
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
    });
    browserHistory.push('/dashboard');
    localStorage.setItem('responseHeaders', JSON.stringify(response.headers));
  })
  .catch((error) => {
    console.log(error);
  });
  }

  logout(boolean){
    this.setState({
      responseHeaders: {}
    })
    localStorage.setItem('responseHeaders', JSON.stringify({}));
    browserHistory.push('/');
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
