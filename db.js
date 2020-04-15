import * as firebase from 'firebase';
import api from './variables'

var firebaseConfig = {
    apiKey: api,
    authDomain: "tutreduxfirebase.firebaseapp.com",
    databaseURL: "https://tutreduxfirebase.firebaseio.com",
    projectId: "tutreduxfirebase",
    storageBucket: "tutreduxfirebase.appspot.com",
    messagingSenderId: "576704846488",
    appId: "1:576704846488:web:b2425a5400ba5ce7dfceed",
    measurementId: "G-WS9KH0FYNC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase