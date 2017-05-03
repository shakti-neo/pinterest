import Alt from "../Alt.jsx"

class LoginActions {
  sendRequest(credentials){
    return credentials;
  }

  checkExpiration(date){
    return date;
  }

  logout(boolean){
    return boolean
  }
}

export default Alt.createActions(LoginActions);
