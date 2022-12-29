import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyAwwlpOyjj1n-oWubjZsWGfGoptiPkvXPg",
  authDomain: "unify-e7e2e.firebaseapp.com",
  databaseURL: "https://unify-e7e2e-default-rtdb.firebaseio.com",
  projectId: "unify-e7e2e",
  storageBucket: "unify-e7e2e.appspot.com",
  messagingSenderId: "672288555685",
  appId: "1:672288555685:web:f8c92b8f4ccdbe8cf7034c",
  measurementId: "G-2TF3S9VXNY"
};

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;