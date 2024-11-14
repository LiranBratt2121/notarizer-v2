import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { Property } from "./types";

const fetchProperties = async (userId: string, isLandlord: boolean): Promise<Property[]> => {
    const db = getFirestore();
    const propertiesRef = collection(db, "properties");

    const propertyQuery = query(
        propertiesRef,
        where(isLandlord ? "landlordId" : "tenantId", "==", userId),
        where("isVisible", "==", true)
    );

    const querySnapshot = await getDocs(propertyQuery);
    const properties: Property[] = [];
    querySnapshot.forEach(doc => {
        properties.push({ id: doc.id, ...doc.data() } as Property);
    });

    return properties;
};

export default fetchProperties;
