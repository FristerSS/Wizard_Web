// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database'
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: NEED_KEY_FROM_ENV, //hide in ENV
    authDomain: "wizardweb-95522.firebaseapp.com",
    databaseURL: "https://wizardweb-95522-default-rtdb.firebaseio.com",
    projectId: "wizardweb-95522",
    storageBucket: "wizardweb-95522.appspot.com",
    messagingSenderId: "567970546932",
    appId: "1:567970546932:web:e79a9146bff3947abd4aa1",
    measurementId: "G-XCN140540J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase();

export default database

const auth = getAuth()

export {auth}
