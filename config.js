import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAUPB2my7dOG_s0Y9VjuE1djyp_Y5gHE0w",
  authDomain: "project-71-e-ride-stage.firebaseapp.com",
  projectId: "project-71-e-ride-stage",
  storageBucket: "project-71-e-ride-stage.appspot.com",
  messagingSenderId: "534173243955",
  appId: "1:534173243955:web:d085d5848c56b058e1a146"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
