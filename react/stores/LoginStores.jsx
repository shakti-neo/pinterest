import Alt from "../Alt.jsx";
import LoginActions from "../actions/LoginActions.jsx";
import axios from "axios";
import { browserHistory } from "react-router";
import Header from "../shared/Header.jsx"

class LoginStore{

  constructor(){
    this.responseHeaders = JSON.parse(localStorage.getItem('responseHeaders')) || {};
    this.responseData = JSON.parse(localStorage.getItem('responseData')) || {};
    this.pins = [];
    this.boards = [];
    this.board = {};
    this.board_pins = [];
    this.bindListeners({
      sendRequest: LoginActions.sendRequest,
      checkExpiration: LoginActions.checkExpiration,
      logout: LoginActions.logout,
      getPins: LoginActions.getPins,
      createPin: LoginActions.createPin,
      updateUserPicture: LoginActions.updateUserPicture,
      createNewBoard: LoginActions.createNewBoard,
      getBoards: LoginActions.getBoards,
      getBoard: LoginActions.getBoard
    });
    this.getNewToken = this.getNewToken.bind(this);
    this.getNewUserData = this.getNewUserData.bind(this);
  }

  sendRequest(credentials){
    axios.post('http://localhost:3000/auth/sign_in', {
    email: credentials.email,
    password: credentials.password
  })
  .then((response) => {
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
      this.setState({
        pins: response.data
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

  createPin(data){
    axios.post("http://localhost:3000/pins", {
      pin:{
        description: data.description,
        pin_content: data.picture,
        board_id: data.board_id
      },
      'access-token': this.responseHeaders["access-token"],
      'client': this.responseHeaders["client"],
      'expiry': this.responseHeaders["expiry"],
      'uid': this.responseHeaders["uid"]
    }).then((response) => {
      this.getNewToken(response);
      browserHistory.push("/dashboard");
    }).catch((error) => {
      console.log(error);
    });
  }

  updateUserPicture(file){
    let user_id = this.responseData.id;
    let route = "http://localhost:3000/users/" + user_id
    axios.put(route, {
      avatar: file,
      'access-token': this.responseHeaders["access-token"],
      'client': this.responseHeaders["client"],
      'expiry': this.responseHeaders["expiry"],
      'uid': this.responseHeaders["uid"]
    }).then((response) => {
      this.getNewToken(response);
      this.getNewUserData(response);
      location.reload();
    }).catch((error) => {
      console.log(error);
    });
  }

  getNewUserData(response){
    this.setState({
      responseData: response.data
    });
    localStorage.setItem('responseData', JSON.stringify(response.data));
  }

  createNewBoard(params){
    axios.post("http://localhost:3000/boards", {
      board: {
        name: params.name,
        description: params.description,
        cover: params.cover
      },
      'access-token': this.responseHeaders["access-token"],
      'client': this.responseHeaders["client"],
      'expiry': this.responseHeaders["expiry"],
      'uid': this.responseHeaders["uid"]
    }).then((response) => {
      this.getNewToken(response);
      browserHistory.push("/upload_pin");
    }).catch((error) => {
      alert("Unable to create board");
    });
  }

  getBoards(boolean){
    axios.get("http://localhost:3000/boards", {
      params: {
      'access-token': this.responseHeaders["access-token"],
      'client': this.responseHeaders["client"],
      'expiry': this.responseHeaders["expiry"],
      'uid': this.responseHeaders["uid"]
      }
    }).then((response) => {
      console.log(response);
      this.setState({
        boards: response.data
      });
      this.getNewToken(response);
    }).catch((error) => {
      console.log(error);
    });
  }

  getBoard(id){
    let url = "http://localhost:3000/boards/" + id
    axios.get(url, {
      params: {
      'access-token': this.responseHeaders["access-token"],
      'client': this.responseHeaders["client"],
      'expiry': this.responseHeaders["expiry"],
      'uid': this.responseHeaders["uid"]
      }
    }).then((response) => {
      console.log(response);
      this.setState({
        board: response.data.board,
        board_pins: response.data.pins
      });
      this.getNewToken(response);
    }).catch((error) => {
      console.log(error);
    });
  }

}

export default Alt.createStore(LoginStore, 'LoginStore');
