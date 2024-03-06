import app from "./firebaseDB";
import { getFirestore } from "firebase/firestore";


const fireStore = getFirestore(app);

export default fireStore;