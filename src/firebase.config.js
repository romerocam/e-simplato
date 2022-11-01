import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6-8khI5GXZ0v8MqKF6i1j_MCx2AzSbBA",
  authDomain: "e-simplato.firebaseapp.com",
  databaseURL: "https://e-simplato-default-rtdb.firebaseio.com",
  projectId: "e-simplato",
  storageBucket: "e-simplato.appspot.com",
  messagingSenderId: "803180431018",
  appId: "1:803180431018:web:84cf81329818ba2e0132d3",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
