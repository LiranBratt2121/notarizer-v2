import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { User } from "./types"
import { FirebaseStorage, getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";

export type RegisterUserData = Omit<User, 'id'> & { password: string; };

const uploadB64Id = async (storage: FirebaseStorage, path: string, data: string) => {
    const imageRef = ref(storage, path);
    console.log(path.substring(0, 24));
    await uploadString(imageRef, data, "data_url");

    return await getDownloadURL(imageRef);
}

const registerUser = async (userData: RegisterUserData, role: "landlord" | "tenant"): Promise<void> => {
    const auth = getAuth();
    const db = getFirestore();
    const storage = getStorage();
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
        const userId = userCredential.user.uid;
        
        const idImageStoragePath = `ids/${userId}/images/${Date.now()}`;
    
        const downloadUrl = await uploadB64Id(storage, idImageStoragePath, userData.idImageString);
        userData['idImageString'] = downloadUrl;

        await setDoc(doc(db, "users", userId), {
            ...userData,
            id: userId,
            role
        });

        await signInWithEmailAndPassword(auth, userData.email, userData.password);
        console.log("User registered and signed in successfully.");
    } catch (error) {
        console.error("Error registering user: ", error);
    }
};

export default registerUser;