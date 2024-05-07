import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "engl101-petition.firebaseapp.com",
  projectId: "engl101-petition",
  storageBucket: "engl101-petition.appspot.com",
  messagingSenderId: "725110920519",
  appId: "1:725110920519:web:62b6da2218990ca1766862",
  measurementId: "G-V5ZY7WBNTL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getNames = async () => {
  const signers = await getDoc(doc(db, "petition", "signatures"));
  const names = signers.data().names;

  return names;
}

const addName = async name => {
  await updateDoc(doc(db, "petition", "signatures"), {
    names: arrayUnion(name)
  });
}

export { getNames, addName };