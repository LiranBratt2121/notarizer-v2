import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    DashboardContainer,
    ContentWrapper,
    Title,
    PropertyList,
    PropertyItem,
    PropertyInfo,
    ButtonGroup,
} from "./styles";
import fetchProperties from "../../firebase/fetchProperties";
import { getUserRole } from "../../firebase/getUserRole";
import { Property } from "../../firebase/types";
import softDeleteProperty from "../../firebase/softDeleteProperty";
import { waitForAuth } from "../../firebase/waitForAuth";
import { CTAButton } from "../../components/buttons/CTAButton";
import { InfoButton } from "../../components/buttons/InfoButton";

const Dashboard: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [isLandlord, setIsLandlord] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const initializeDashboard = async () => {
            try {
                setLoading(true);
                const userId = await waitForAuth();

                if (!userId) {
                    navigate("/mvp-notarizer/");
                    alert("Please sign in before entering the dashboard");
                    return;
                }

                const role = await getUserRole(userId);
                if (!role) {
                    alert("User role not found");
                    navigate("/mvp-notarizer/");
                    return;
                }

                setIsLandlord(role === "landlord");
                const loadedProperties = await fetchProperties(userId, role === "landlord");
                setProperties(loadedProperties);
            } catch (error) {
                console.error("Error initializing dashboard:", error);
                alert("An error occurred while loading the dashboard");
                navigate("/mvp-notarizer/");
            } finally {
                setLoading(false);
            }
        };

        initializeDashboard();
    }, [navigate]);

    const handleDelete = async (propertyId: string) => {
        try {
            await softDeleteProperty(propertyId);
            setProperties(prevProperties => prevProperties.filter(property => property.id !== propertyId));
        } catch (error) {
            console.error("Error hiding property:", error);
            alert("Failed to delete property. Please try again.");
        }
    };

    if (loading) {
        return (
            <DashboardContainer>
                <ContentWrapper>
                    <Title>Loading...</Title>
                </ContentWrapper>
            </DashboardContainer>
        );
    }

    return (
        <DashboardContainer>
            <ContentWrapper>
                <Title>{isLandlord ? "Landlord Dashboard" : "Tenant Dashboard"}</Title>

                {isLandlord && (
                    <CTAButton onClick={() => navigate("/mvp-notarizer/add-property")}>
                        Add Property
                    </CTAButton>
                )}

                <PropertyList>
                    {properties.length === 0 ? (
                        <PropertyItem>
                            <PropertyInfo>No properties available.</PropertyInfo>
                        </PropertyItem>
                    ) : (
                        properties.map(property => (
                            <PropertyItem key={property.id}>
                                <PropertyInfo>
                                    {property.address.street}, {property.address.city}
                                </PropertyInfo>
                                <ButtonGroup>
                                    {isLandlord && (
                                        <InfoButton
                                            className="delete"
                                            onClick={() => handleDelete(property.id)}
                                        >
                                            Delete
                                        </InfoButton>
                                    )}
                                    <InfoButton className="view">View</InfoButton>
                                </ButtonGroup>
                            </PropertyItem>
                        ))
                    )}
                </PropertyList>
            </ContentWrapper>
        </DashboardContainer>
    );
};

export default Dashboard;