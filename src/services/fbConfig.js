import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { fbConfig } from "../../config.js";
import { getFirestore } from "firebase/firestore";

const FirebaseApp = initializeApp(fbConfig);

export const FirebaseAuth = getAuth();

export const FirebaseDb = getFirestore(FirebaseApp);
