import React, { useState } from 'react';
import { PropertyProps } from './types';
import {
    PropertyContainer,
    Title,
    PropertyDetails,
    PropertyImages,
    ImageContainer,
    PropertyImage,
    Text,
    FullscreenModal,
    FullscreenImage,
} from './property.styles';
import { DarkCTAButton } from '../buttons/CTAButtonDark';
import { useNavigate } from 'react-router-dom';
import { formatDate } from './utils';

const Property: React.FC<PropertyProps> = ({ property, landlord, tenant }) => {
    const navigate = useNavigate();
    const { address, images, tenantAuthorized } = property;
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

    const handleImageClick = (imageSrc: string) => {
        setFullscreenImage(imageSrc);
    };

    const closeFullscreenModal = () => {
        setFullscreenImage(null);
    };

    const filteredImages = images?.filter(image => {
        if (tenantAuthorized) return true;
        if (property.landlordId === landlord?.id) return image.uploaderRole === 'landlord';
        return image.uploaderRole === 'tenant' && image.uploaderId === tenant?.id;
    });

    return (
        <PropertyContainer>
            <Title>
                {landlord && `Property of ${landlord.firstName} ${landlord.lastName}`}
                {tenant && ` and ${tenant.firstName} ${tenant.lastName}`}
            </Title>

            <PropertyDetails>
                <Text>{address.street}</Text>
                <Text>{`${address.city}, ${address.countryOrRegion} ${address.zipCode}`}</Text>
            </PropertyDetails>
            <DarkCTAButton onClick={() => navigate(`/notarize/${property.id}`)}>
                Add More Images
            </DarkCTAButton>

            <PropertyImages>
                {filteredImages && filteredImages.length > 0 ? (
                    filteredImages.map((image, index) => (
                        <ImageContainer key={index}>
                            <PropertyImage
                                src={image.storagePath}
                                alt={`Property Image ${index + 1}`}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://storage.googleapis.com/assets/placeholder.jpg';
                                }}

                                onClick={() => handleImageClick(image.storagePath)}
                            />
                            <Text color="#ccc">Notarized: {formatDate(image.uploadedAt)}</Text>
                            <Text color="#ccc">By: {image.uploaderRole}</Text>
                        </ImageContainer>
                    ))
                ) : (
                    <Text>No images available for this property</Text>
                )}
            </PropertyImages>
            {fullscreenImage && (
                <FullscreenModal onClick={closeFullscreenModal}>
                    <FullscreenImage src={fullscreenImage} alt="Fullscreen" />
                </FullscreenModal>
            )}
        </PropertyContainer>
    );
};

export default Property;
