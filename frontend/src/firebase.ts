// frontend/src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyeUG2rsh8dRjL5UfYbRK6Yr23dNieZfg",
  authDomain: "baynex-c6cc1.firebaseapp.com",
  projectId: "baynex-c6cc1",
  storageBucket: "baynex-c6cc1.appspot.com",
  messagingSenderId: "901162083553",
  appId: "1:901162083553:web:b39ccbe59c491ce69803a0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
