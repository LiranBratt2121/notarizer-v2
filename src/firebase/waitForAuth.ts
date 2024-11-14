import { getAuth, onAuthStateChanged } from "firebase/auth";

export const waitForAuth = () => {
    const auth = getAuth();
    return new Promise<string | null>((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            unsubscribe(); // Cleanup subscription right away
            resolve(user ? user.uid : null);
        });
    });
};