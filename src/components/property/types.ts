import { User, Property } from "../../firebase/types";

export interface PropertyProps {
    landlord: User | null;
    tenant: User | null;
    property: Property;
}
