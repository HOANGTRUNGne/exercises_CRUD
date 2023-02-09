import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBeMCEuoyJNyYS0hXkPOczdDKO-foJwsWY",
    authDomain: "businessmanagement-b92e1.firebaseapp.com",
    databaseURL: "https://businessmanagement-b92e1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "businessmanagement-b92e1",
    storageBucket: "businessmanagement-b92e1.appspot.com",
    messagingSenderId: "353800403631",
    appId: "1:353800403631:web:083e110a714f3dce4a325a"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
