import { collection, query, where, getDocs, getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Address, Property } from "./types";
import { useNavigate } from "react-router-dom";

const findPropertyByAddress = async (address: Address, isLandlord: boolean) => {
    const navigate = useNavigate();

    const db = getFirestore();
    const auth = getAuth();
    const userId = auth?.currentUser?.uid;

    if (!userId) {
        console.log('User is not authenticated Login please.')
        alert('User is not authenticated Login please.')
        navigate("/");
        return;
    }

    const propertiesRef = collection(db, "properties");

    try {
        const q = query(propertiesRef,
            where("address.city", "==", address.city),
            where("address.street", "==", address.street),
            where("address.countryOrRegion", "==", address.countryOrRegion),
            where("address.zipCode", "==", address.zipCode),
            where(isLandlord ? "landlordId" : "tenantId", "==", userId)
        );

        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.log("No property found matching the criteria.");
            return null;
        }

        const propertyDoc = querySnapshot.docs[0];
        const propertyData = propertyDoc.data();

        return propertyData;
    } catch (error) {
        console.error("Error fetching property:", error);
        alert("Error fetching property");
        return null;
    }
};

const findPropertyById = async (propertyId: string): Promise<Property | null> => {
    const db = getFirestore();
    const propertyRef = doc(db, "properties", propertyId);

    try {
        const propertyDoc = await getDoc(propertyRef);

        if (!propertyDoc.exists) {
            console.log("Property not found with the given ID.");
            return null;
        }

        const propertyData = propertyDoc.data();
        return propertyData as Property;
    } catch (error) {
        console.error("Error fetching property:", error);
        alert("Error fetching property");
        return null;
    }
};

export { findPropertyByAddress, findPropertyById };