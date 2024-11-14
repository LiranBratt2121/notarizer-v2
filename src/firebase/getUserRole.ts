import { getFirestore, doc, getDoc } from "firebase/firestore";

export const getUserRole = async (userId: string): Promise<"landlord" | "tenant" | null> => {
    const db = getFirestore();
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
        const userData = userDoc.data();
        return userData.role as "landlord" | "tenant";
    } else {
        console.error("No user found with the given ID.");
        return null;
    }
};
