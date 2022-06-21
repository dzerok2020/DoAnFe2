import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, push, onValue } from "firebase/database";
import firebase from "firebase/compat";

const firebaseConfig = {
  apiKey: "AIzaSyCP4_q_7nhJ-uw_jL7lrG82F21QUGIz4IU",
  authDomain: "project-fe2-bd154.firebaseapp.com",
  databaseURL:
    "https://project-fe2-bd154-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-fe2-bd154",
  storageBucket: "project-fe2-bd154.appspot.com",
  messagingSenderId: "741201503430",
  appId: "1:741201503430:web:a045c89c365cda2ef223c7",
  measurementId: "G-XNH60ZCK3N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

window.fbAsyncInit = function() {
  FB.init({
    appId      : '{your-app-id}',
    cookie     : true,
    xfbml      : true,
    version    : '{api-version}'
  });

  FB.AppEvents.logPageView();

};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



export { database, analytics, app, firebase, ref, push, onValue };
