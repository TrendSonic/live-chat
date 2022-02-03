import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {

  apiKey: "AIzaSyCmF51s1qCs-EThCPNzW5xyh6ksyNOSIw8",

  authDomain: "udemy-vue-firebse-sites-b7e18.firebaseapp.com",

  projectId: "udemy-vue-firebse-sites-b7e18",

  storageBucket: "udemy-vue-firebse-sites-b7e18.appspot.com",

  messagingSenderId: "174998129505",

  appId: "1:174998129505:web:0aefa9b296a9cbe5db5320"

};

// init firebase
firebase.initializeApp(firebaseConfig)

// auth
const projectAuth = firebase.auth()

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth }