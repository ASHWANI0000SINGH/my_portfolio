import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB1RMSmiFZGkCpKZu4M6VaTRWr2nyWC_a0",
  authDomain: "react-portfolio-ashwani.firebaseapp.com",
  projectId: "react-portfolio-ashwani",
  storageBucket: "react-portfolio-ashwani.appspot.com",
  messagingSenderId: "316006360198",
  appId: "1:316006360198:web:00c947a77489291c6f5d07",
  measurementId: "G-VMSGW6V3YP"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore();