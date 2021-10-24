import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBm8ZXBMO8H4O_btLTZrNoHLsfLE29bIM4",
    authDomain: "myloanapp-fc648.firebaseapp.com",
    projectId: "myloanapp-fc648",
    storageBucket: "myloanapp-fc648.appspot.com",
    messagingSenderId: "309021856817",
    appId: "1:309021856817:web:022420a6f5a81b38e53110"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;