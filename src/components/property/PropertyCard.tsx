import React from 'react'
import { ButtonGroup, PropertyInfo, PropertyItem } from './propertyCard.styles'
import { InfoButton } from '../buttons/InfoButton'
import { PropertyCardProps } from './propertyCard.types'
import { useNavigate } from 'react-router-dom'

const PropertyCard: React.FC<PropertyCardProps> = ({ property, isLandlord, handleDelete }) => {
    const navigate = useNavigate();

    return (
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
                <InfoButton className="view" onClick={() => navigate(`/mvp-notarizer/property/${property.id}`)}>View</InfoButton>
            </ButtonGroup>
        </PropertyItem>
    )
}

export default PropertyCard
