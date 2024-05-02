// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore,collection, addDoc,query,onSnapshot,orderBy, } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD5n1i4KR5AQNbIQkvs8BePNazeM9yiUZI",
  authDomain: "reactnativeapp-f93a4.firebaseapp.com",
  projectId: "reactnativeapp-f93a4",
  storageBucket: "reactnativeapp-f93a4.appspot.com",
  messagingSenderId: "647327194122",
  appId: "1:647327194122:web:caf38e9837011b091fd3f3",
  measurementId: "G-JBTX2CCNRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function SignUpPage (userInfo) {
    
    try{
      const {inputEamil, inputPassword, name , lastname, conutry , city, bike} =userInfo
    
      await createUserWithEmailAndPassword(auth, inputEamil, inputPassword,)
      
      await addDoc(collection(db, "Driver Users"),{
  
        inputEamil, inputPassword, name , lastname, conutry , city, bike
      })
  
  
      alert("theek hai")
      return true
  
    }catch (e) {
      alert(e.message)
      throw e;
    }
  }


  export async function signIn (useInfo) {
    try{
  
     const {inputEamil, inputPassword} = useInfo
     await signInWithEmailAndPassword(auth, inputEamil, inputPassword)
 
     alert("your are successfully login brother/madam")
     return true;
    }catch(e){
     alert(e.message)
     throw e;
    }
 }


 async function riderRequest  (riderRequest) {
    await addDoc(collection(db,"rides"),riderRequest)
 }

 export {
  query,onSnapshot,orderBy,collection,db
 }

 export {
 riderRequest
 }