import { initializeApp } from "firebase/app";
import { getFirestore }  from '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAgoPcuyUzKLF3P-qcyqo56yCYHynanYO8",
  authDomain: "crud-fire-react-1fc29.firebaseapp.com",
  projectId: "crud-fire-react-1fc29",
  storageBucket: "crud-fire-react-1fc29.firebasestorage.app",
  messagingSenderId: "224246276339",
  appId: "1:224246276339:web:98b83cdcce32b92b30d786"
};

const app = initializeApp(firebaseConfig);
  
export const db = getFirestore(app)

