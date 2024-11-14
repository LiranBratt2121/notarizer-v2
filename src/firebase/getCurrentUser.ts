import { getAuth } from "firebase/auth";

export const getCurrentUserId = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    return user ? user.uid : null;
};
