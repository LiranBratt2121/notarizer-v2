import { Property } from "../../firebase/types";

interface PropertyCardProps {
    isLandlord: boolean;
    property: Property;
    handleDelete: (id: string) => void;
}

export type { PropertyCardProps } ;