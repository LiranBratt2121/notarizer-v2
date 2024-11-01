import { Property } from "../../firebase/types";

interface DashboardProps {
    properties: Property[];
    isLandlord: boolean; // Flag to determine if the user is a landlord
    onEdit: (propertyId: string) => void;
    onDelete: (propertyId: string) => void;
}

export type { DashboardProps }