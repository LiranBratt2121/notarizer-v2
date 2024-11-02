import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { User } from "./types"

export type RegisterUserData = Omit<User, 'id'> & { password: string; role: "landlord" | "tenant" };

const registerUser = async (userData: RegisterUserData): Promise<void> => {
    const auth = getAuth();
    const db = getFirestore();

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
        const userId = userCredential.user.uid;

        await setDoc(doc(db, "users", userId), {
            ...userData,
            id: userId,
        });

        await signInWithEmailAndPassword(auth, userData.email, userData.password);
        console.log("User registered and signed in successfully.");
    } catch (error) {
        console.error("Error registering user: ", error);
    }
};

export default registerUser;