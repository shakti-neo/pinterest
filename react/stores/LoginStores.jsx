import Alt from "../Alt.jsx";
import LoginActions from "../actions/LoginActions.jsx";
import axios from "axios";
import { browserHistory } from "react-router";
import Header from "../shared/Header.jsx"

class LoginStore{

  constructor(){
    this.responseHeaders = JSON.parse(localStorage.getItem('responseHeaders')) || {};
    this.responseData = JSON.parse(localStorage.getItem('responseData')) || {};
    this.images = [];
    this.bindListeners({
      sendRequest: LoginActions.sendRequest,
      checkExpiration: LoginActions.checkExpiration,
      logout: LoginActions.logout,
      getPins: LoginActions.getPins,
      uploadPin: LoginActions.uploadPin
    });
    this.getNewToken = this.getNewToken.bind(this);
  }

  sendRequest(credentials){
    axios.post('http://localhost:3000/auth/sign_in', {
    email: credentials.email,
    password: credentials.password
  })
  .then((response) => {
    console.log(response);
    this.setState({
      responseHeaders: response.headers,
      responseData: response.data.data
    });
    browserHistory.push('/dashboard');
    localStorage.setItem('responseHeaders', JSON.stringify(response.headers));
    localStorage.setItem('responseData', JSON.stringify(response.data.data));
  })
  .catch((error) => {
    console.log(error);
  });
  }

  logout(boolean){
    this.setState({
      responseHeaders: {},
      responseData: {}
    })
    localStorage.setItem('responseHeaders', JSON.stringify({}));
    localStorage.setItem('responseData', JSON.stringify({}));
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

  getPins(boolean){
    axios.get('http://localhost:3000/pins', {
        params: {
          'access-token': this.responseHeaders["access-token"],
          'client': this.responseHeaders["client"],
          'expiry': this.responseHeaders["expiry"],
          'uid': this.responseHeaders["uid"]
        }
    }).then((response) => {
      console.log(response);
      this.setState({
        images: response.data
      })
      this.getNewToken(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  getNewToken(response){
    if(response.headers["access-token"]){
      this.setState({
        responseHeaders: response.headers
      });
      localStorage.setItem('responseHeaders', JSON.stringify(response.headers));
    }
  }

  uploadPin(data){
    axios.post("http://localhost:3000/pins", {
      pin:{
        description: data.description,
        pin_content: data.picture
      },
      'access-token': this.responseHeaders["access-token"],
      'client': this.responseHeaders["client"],
      'expiry': this.responseHeaders["expiry"],
      'uid': this.responseHeaders["uid"],
    }).then((response) => {
      console.log(response);
      this.getNewToken(response);
    }).catch((error) => {
      console.log(error);
    });
  }

}

export default Alt.createStore(LoginStore, 'LoginStore');
