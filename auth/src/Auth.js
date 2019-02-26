import auth0 from "auth0-js";
import jwtDecode from "jwt-decode";
const LOGIN_SUCCESS_PAGE="/secret";
const LOGIN_FAILURE_PAGE="/"

export default class Auth {
    constructor()
    {
        this.login=this.login.bind(this)
        this.handleAuthentication=this.handleAuthentication.bind(this);
        this.isAuthenticated=this.isAuthenticated.bind(this)
    }
    auth0=new auth0.WebAuth({
        domain:"pankajthayat.auth0.com",
        clientID:"XnKEYUuQRURjMTDIu2bN2u6ilg7v2qAj",
        redirectUri:"http://localhost:3000/callback",
        responseType:"token id_token",
        scope:"openid"
    })
  
    login(){
        console.log("login called")
        this.auth0.authorize();;
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        let expiresAt=JSON.stringify((authResult.expiresIn)*1000 +new Date().getTime());
        localStorage.setItem("access_token",authResult.accessToken);
        localStorage.setItem("id_token",authResult.idToken);
        localStorage.setItem("expires_At",expiresAt);
        location.hash="";
        location.pathname=LOGIN_SUCCESS_PAGE;
      } else if(err){
          location.pathname=LOGIN_FAILURE_PAGE;
          console.log(err);
      }
    })
}

isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_At"));
    return new Date().getTime() < expiresAt;
  }
  logout(){
      localStorage.removeItem("access_token");
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_At");
      location.pathname=LOGIN_FAILURE_PAGE;
  }
  getProfile(){
      if(localStorage.getItem("id_token")){
          return jwtDecode(localStorage.getItem("id_token"));
      }
      else{
          return {};
      }
  }


}
/* eslint no-restricted-globals: 0*/


// auth0 lib is simply a wrapper around all the app0 api..it provide methods to login and authentication
