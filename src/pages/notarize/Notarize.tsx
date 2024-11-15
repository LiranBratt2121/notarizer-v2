import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WebcamComponent from '../../components/webcam/Webcam';
import uploadPropertyImage from '../../firebase/uploadPropertyImage';
import { AddImageButton, NotarizeContainer, Title } from './styles';
import { Camera } from 'lucide-react';
import { waitForAuth } from '../../firebase/waitForAuth';
import { getUserRole } from '../../firebase/getUserRole';

const Notarize = () => {
    const { propertyId } = useParams();
    const [showCamera, setShowCamera] = useState(false);
    const navigate = useNavigate();

    const handleContinue = async (imageBase64: string) => {
        if (!propertyId || !imageBase64) return;

        try {
            const uploaderId = await waitForAuth();

            if (!uploaderId) {
                navigate("/");
                alert("Please sign in before notarizing");
                return;
            }

            const uploaderRole = await getUserRole(uploaderId);

            if (!uploaderRole) {
                navigate("/");
                alert("Uploader role was not tenant or landlord. strange!");
                return;
            }

            console.log(propertyId)
            await uploadPropertyImage(propertyId, imageBase64, uploaderId, uploaderRole);
            setShowCamera(false);
        } catch (error) {
            console.error("Error handling image:", error);
        }
    };

    return (
        <NotarizeContainer>
            <Title>Upload Property Images</Title>
            <AddImageButton onClick={() => setShowCamera(true)}>
                <Camera size={24} />
                Add Images
            </AddImageButton>

            {showCamera && (
                <WebcamComponent
                    handleContiueInner={handleContinue}
                    toNavigate={() => navigate(-1)}
                    onClose={() => setShowCamera(false)}
                />
            )}
        </NotarizeContainer>
    );
};

export default Notarize;