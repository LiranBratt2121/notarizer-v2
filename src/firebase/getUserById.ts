import { doc, getDoc, getFirestore } from "firebase/firestore";
import { User } from "./types";

const getUserById = async (userId: string): Promise<User | null> => {
    const db = getFirestore();
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
        return userDoc.data() as User;
    }
    
    console.error("No user found with the given ID.");
    return null;
}

export { getUserById };