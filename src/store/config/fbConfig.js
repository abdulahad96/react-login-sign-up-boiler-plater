import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA8gOQSfg1TRc5DB8mwRpM1_bEANgx-4bw",
    authDomain: "work-flow-web-app.firebaseapp.com",
    databaseURL: "https://work-flow-web-app.firebaseio.com",
    projectId: "work-flow-web-app",
    storageBucket: "work-flow-web-app.appspot.com",
    messagingSenderId: "1082111298921"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase;