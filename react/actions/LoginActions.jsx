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

  createPin(data){
    return data;
  }

  updateUserPicture(file){
    return file;
  }

  createNewBoard(params){
    return params;
  }

  getBoards(){
    return true;
  }

  getBoard(id){
    return id;
  }
}

export default Alt.createActions(LoginActions);
