import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { findPropertyById } from '../../firebase/findPropertyBy';
import { Property as PropertyType, User } from '../../firebase/types';
import Property from '../../components/property/Property';
import { waitForAuth } from '../../firebase/waitForAuth';
import { getUserById } from '../../firebase/getUserById';
import { PropertyContainer, Title, Text } from '../../components/property/property.styles';

const PropertyDisplay: React.FC = () => {
    const { propertyId } = useParams();
    const navigate = useNavigate();

    const [propertyData, setPropertyData] = useState<PropertyType | null>(null);
    const [landlord, setLandlord] = useState<User | null>(null);
    const [tenant, setTenant] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPropertyData = async () => {
            try {
                setLoading(true);
                setError(null);

                const currentUserId = await waitForAuth();
                if (!currentUserId) {
                    navigate("/login");
                    return;
                }

                if (!propertyId) {
                    setError("Property ID is missing");
                    navigate("/dashboard");
                    return;
                }

                const property = await findPropertyById(propertyId);
                if (!property) {
                    setError("Property not found");
                    return;
                }

                if (property.landlordId !== currentUserId && property.tenantId !== currentUserId) {
                    setError("You don't have permission to view this property");
                    navigate("/dashboard");
                    return;
                }

                setPropertyData(property);

                if (property.landlordId) {
                    const landlordData = await getUserById(property.landlordId);
                    if (landlordData) {
                        setLandlord(landlordData);
                    }
                }

                if (property.tenantId) {
                    const tenantData = await getUserById(property.tenantId);
                    if (tenantData) {
                        setTenant(tenantData);
                    }
                }

            } catch (err) {
                console.error("Error fetching property data:", err);
                setError("Failed to load property data");
            } finally {
                setLoading(false);
            }
        };

        fetchPropertyData();
    }, [propertyId, navigate]);

    if (loading) {
        return (
            <PropertyContainer>
                <Title>Loading...</Title>
            </PropertyContainer>
        );
    }

    if (error) {
        return (
            <PropertyContainer>
                <Text>{error}</Text>
            </PropertyContainer>
        );
    }

    return propertyData ? (
        <Property
            property={propertyData}
            landlord={landlord}
            tenant={tenant}
        />
    ) : null;
};

export default PropertyDisplay;
