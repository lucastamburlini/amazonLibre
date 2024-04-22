import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY8-jWgVhsazYxVtUKBkD0scyp0yrfLsw",
  authDomain: "libre-88c60.firebaseapp.com",
  projectId: "libre-88c60",
  storageBucket: "libre-88c60.appspot.com",
  messagingSenderId: "737396919694",
  appId: "1:737396919694:web:96e3d06afbc65ac61c68df"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {getAuth};