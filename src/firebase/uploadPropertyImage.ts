import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";
import { ImageData } from "./types"; 
import { doc, getFirestore, setDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";

const uploadPropertyImage = async (propertyId: string, imageBase64: string, uploaderId: string, uploaderRole: 'landlord' | 'tenant'): Promise<void> => {
    const storage = getStorage();
    const storagePath = `properties/${propertyId}/images/${Date.now()}`; // Use a timestamp for unique image paths
    const imageRef = ref(storage, storagePath);

    try {
        // Upload the image as a base64 string
        await uploadString(imageRef, imageBase64, 'data_url');
        const downloadURL = await getDownloadURL(imageRef);

        // Save the image reference in Firestore
        const imageData: ImageData = {
            storagePath: downloadURL,
            uploadedAt: new Date().toISOString(),
            uploaderRole,
            uploaderId,
        };

        const propertyRef = doc(getFirestore(), "properties", propertyId);
        await setDoc(propertyRef, { images: firebase.firestore.FieldValue.arrayUnion(imageData) }, { merge: true }); // Add image to existing images array
        console.log("Image uploaded and saved to property successfully.");
    } catch (error) {
        console.error("Error uploading image: ", error);
    }
};

export default uploadPropertyImage;