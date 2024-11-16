import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteUser } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { FirebaseStorage, getDownloadURL, getStorage, ref, uploadString, deleteObject } from "firebase/storage";
import { User } from "./types";

export type RegisterUserData = Omit<User, 'id'> & { password: string };

const uploadB64Id = async (storage: FirebaseStorage, path: string, data: string): Promise<string | null> => {
    try {
        const imageRef = ref(storage, path);
        await uploadString(imageRef, data, "data_url");
        return await getDownloadURL(imageRef);
    } catch (error) {
        console.error("Error uploading ID image:", error);
        throw new Error("Failed to upload ID image.");
    }
};

const registerUser = async (userData: RegisterUserData, role: "landlord" | "tenant"): Promise<void> => {
    const auth = getAuth();
    const db = getFirestore();
    const storage = getStorage();

    let userId: string | null = null;
    let imageDownloadUrl: string | null = null;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
        userId = userCredential.user.uid;

        const idImageStoragePath = `ids/${userId}/images/${Date.now()}`;
        imageDownloadUrl = await uploadB64Id(storage, idImageStoragePath, userData.idImageString);

        const userDoc = {
            ...userData,
            id: userId,
            role,
            idImageString: imageDownloadUrl,
        };
        await setDoc(doc(db, "users", userId), userDoc);

        await signInWithEmailAndPassword(auth, userData.email, userData.password);
        console.log("User registered and signed in successfully.");
    } catch (error: any) {
        // Cleanup: If something went wrong, delete the user and image

        // If the user was created, delete them
        if (userId) {
            try {
                await deleteUser(auth.currentUser!); // Delete the created user
                console.log("User deleted due to registration failure.");
            } catch (cleanupError) {
                console.error("Error cleaning up user:", cleanupError);
                alert("Error cleaning up user, bad: " + cleanupError);
            }
        }

        // If image was uploaded, delete the image
        if (imageDownloadUrl) {
            try {
                const imageRef = ref(storage, `ids/${userId}/images/${Date.now()}`);
                await deleteObject(imageRef);
                console.log("Image deleted due to registration failure.");
            } catch (cleanupError) {
                console.error("Error cleaning up image:", cleanupError);
            }
        }

        if (error.code === "auth/email-already-in-use") {
            throw new Error("Account was not created. This email is already in use. Please use a different email address.");
        } else if (error.code === "auth/weak-password") {
            throw new Error("Account was not created. The password is too weak. Please choose a stronger password.");
        } else if (error.code === "auth/invalid-email") {
            throw new Error("Account was not created. The email address is not valid.");
        }

        // Rethrow error with general message if no specific error is found
        throw new Error(error.message || "An unknown error occurred during registration.");
    }
};

export default registerUser;
