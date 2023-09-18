import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVPa2hUMqnNB7YQZA5ZiNAzC3L78NEPd0",
    authDomain: "libreria-lucianolanza.firebaseapp.com",
    projectId: "libreria-lucianolanza",
    storageBucket: "libreria-lucianolanza.appspot.com",
    messagingSenderId: "77381278737",
    appId: "1:77381278737:web:2ecda11137c466f636e5b0"
};

// Initialize app
const app = firebase.initializeApp(firebaseConfig)
export const getFirestore = () => {
    return firebase.firestore(app)
}
