import Alt from "../Alt.jsx"

class LoginActions {
  sendRequest(credentials){
    return credentials;
  }

  checkExpiration(date){
    return date;
  }

  logout(boolean){
    return boolean;
  }

  getPins(){
    return true;
  }

  uploadPin(data){
    return data;
  }

  updateUserPicture(file){
    return file;
  }
}

export default Alt.createActions(LoginActions);
