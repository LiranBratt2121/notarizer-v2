import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { countries } from 'country-data-list';
import FormSection from '../../components/formSection/FormSection';
import { FormContent } from '../../components/formSection/types';
import { Property } from '../../firebase/types';
import { waitForAuth } from '../../firebase/waitForAuth';
import addProperty from '../../firebase/addProperty';

const AddProperty = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const userId = await waitForAuth();
                if (!userId) {
                    navigate("/");
                    alert("Please sign in before entering the dashboard");
                }
            } catch (error) {
                console.error(error);
            }
        };

        checkAuth();
    }, [navigate]);

    const handleSubmit = async (formData: any) => {
        try {
            const userId = await waitForAuth();

            if (!userId) {
                navigate("/");
                alert("Please sign in before entering the dashboard");
                return;
            }

            const propertyData: Omit<Property, 'id'> = {
                landlordId: userId,
                tenantId: null,
                address: {
                    street: formData.street,
                    city: formData.city,
                    countryOrRegion: formData.countryOrRegion,
                    zipCode: formData.zipCode
                },
                images: [],
                tenantAuthorized: false,
                isVisible: true
            };

            await addProperty(propertyData);
            navigate("/dashboard");
        } catch (error) {
            console.error('Error adding property:', error);
        }
    };

    const formStructure: FormContent = [
        [
            {
                name: 'street',
                lable: 'Street Address',
                type: 'text',
                required: true,
                placeholder: 'Enter street address'
            },
            {
                name: 'city',
                lable: 'City',
                type: 'text',
                required: true,
                placeholder: 'Enter city'
            },
            {
                lable: "Country or Region",
                name: "countryOrRegion",
                required: true,
                type: "dropDown",
                options: countries.all.map((country) => (
                    { lable: country.name, value: country.name }
                ))
            },
            {
                name: 'zipCode',
                lable: 'Zip Code',
                type: 'text',
                required: true,
                placeholder: 'Enter zip code'
            }
        ]
    ];

    return (
        <FormSection
            title="Add New Property"
            subTitle="Please fill in the property details"
            forms={formStructure}
            handleSubmit={handleSubmit}
        />
    );
};

export default AddProperty;