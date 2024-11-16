import { format } from "date-fns";

const formatDate = (dateString: string) => {
    try {
        return format(new Date(dateString), 'MMM dd, yyyy HH:mm');
    } catch {
        return dateString;
    }
};

export { formatDate }