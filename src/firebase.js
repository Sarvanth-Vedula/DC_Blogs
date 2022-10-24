import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDg5-tjArfhuCt55pIxku3D7nU2qkUPmzw",
    authDomain: "blog-app-csd.firebaseapp.com",
    projectId: "blog-app-csd",
    storageBucket: "blog-app-csd.appspot.com",
    messagingSenderId: "187490937293",
    appId: "1:187490937293:web:58b3ba3ba2ef301801fc84"
  };


const app=initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const storage= getStorage(app);
const provider=new GoogleAuthProvider();
export{auth,db,storage,provider};
