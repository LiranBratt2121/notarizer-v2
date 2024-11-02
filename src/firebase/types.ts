// Users Collection
type User = {
    id: string; // Firestore-generated ID
    idImageString: string;
    firstName: string;
    lastName: string;
    email: string;
    role: "landlord" | "tenant";
    phoneNumber: string;
    birthday?: string;
    streetAddress: string;     
    zipOrPostalCode?: number;    
    city?: string;                
    countryOrRegion?: string;     
};

// Properties Collection
type Property = {
    id: string; // Firestore-generated ID
    landlordId: string; // Link to User (landlord)
    tenantId: string | null; // Link to User (tenant) if assigned
    address: Address; // Reference to the Address type
    images: ImageData[]; // References to images in Firebase Storage
    tenantAuthorized: boolean; // If true, landlord and tenant images are hidden from each other
};

type Address = {
    street: string;
    city: string;
    country: string;
    zipCode: string;
};

type ImageData = {
    storagePath: string;
    uploadedAt: string;
    uploaderRole: 'landlord' | 'tenant';
    uploaderId: string; // Unique ID of the uploader
};

// Exporting types
export type { User, Property, Address, ImageData };
