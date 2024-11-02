import { User, Property } from "../../firebase/types";

export interface PropertyProps {
    landlord: User;
    tenant: User | null;
    property: Property;
}
