import { doc, getFirestore, setDoc } from "firebase/firestore";

const softDeleteProperty = async (propertyId: string): Promise<void> => {
    const db = getFirestore();
    const propertyRef = doc(db, "properties", propertyId);

    try {
        await setDoc(propertyRef, { isVisible: false }, { merge: true }); // Update the isVisible field to false
        console.log("Property hidden successfully.");
    } catch (error) {
        console.error("Error hiding property: ", error);
    }
};

export default softDeleteProperty;

