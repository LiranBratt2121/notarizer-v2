import { getFirestore, collection, query, where, getDocs, addDoc, updateDoc } from "firebase/firestore";
import { Property } from "./types";

const addProperty = async (propertyData: Omit<Property, "id">): Promise<void> => {
    const db = getFirestore();
    const { address } = propertyData;

    const propertiesRef = collection(db, "properties");
    const q = query(propertiesRef, where("address.street", "==", address.street), where("address.city", "==", address.city), where("address.zipCode", "==", address.zipCode));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
        throw new Error("A property already exists at this address.");
    }

    try {
        const ref = await addDoc(propertiesRef, { ...propertyData});
        await updateDoc(ref, {id: ref.id});

        console.log("Property added successfully.");
        alert("Property added successfully.");
    } catch (error) {
        console.error("Error adding property: ", error);
    }
};

export default addProperty;