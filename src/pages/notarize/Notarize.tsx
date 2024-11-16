import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WebcamComponent from '../../components/webcam/Webcam';
import uploadPropertyImage from '../../firebase/uploadPropertyImage';
import { AddImageButton, NotarizeContainer, Title, UploadMessage } from './styles';
import { Camera } from 'lucide-react';
import { waitForAuth } from '../../firebase/waitForAuth';
import { getUserRole } from '../../firebase/getUserRole';
import { formatDate } from '../../components/property/utils';

const Notarize = () => {
    const { propertyId } = useParams();
    const [showCamera, setShowCamera] = useState(false);
    const [uploaderId, setUploaderId] = useState<string | null>(null);
    const [uploaderRole, setUploaderRole] = useState<'landlord' | 'tenant' | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = await waitForAuth();
                setUploaderId(userId);

                if (userId) {
                    const role = await getUserRole(userId);
                    setUploaderRole(role);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                navigate("/dashboard");
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleContinue = async (imageBase64: string) => {
        if (!propertyId || !imageBase64) return;

        try {
            if (!uploaderId) {
                navigate("/");
                alert("Please sign in before notarizing");
                return;
            }

            if (!uploaderRole) {
                navigate("/");
                alert("Uploader role was not tenant or landlord. strange!");
                return;
            }

            setIsUploading(true);
            await uploadPropertyImage(propertyId, imageBase64, uploaderId, uploaderRole);
            setIsUploading(false);
            navigate(`/property/${propertyId}`);
        } catch (error) {
            console.error("Error handling image:", error);
            setIsUploading(false);
            alert("Failed to upload image. Please try again.");
        }
    };

    return (
        <>
            <NotarizeContainer>
                <Title>Upload Property Images</Title>
                {isUploading && (
                    <UploadMessage>
                        Uploading image... Please wait and do not leave this page.
                    </UploadMessage>
                )}
                <AddImageButton
                    onClick={() => setShowCamera(true)}
                    disabled={isUploading}
                >
                    <Camera size={24} />
                    Add Images
                </AddImageButton>

                {showCamera && uploaderRole && !isUploading && (
                    <WebcamComponent
                        handleContiueInner={handleContinue}
                        onClose={() => setShowCamera(false)}
                        applyWatermark={true}
                        watermarkProps={{ date: formatDate(new Date().toISOString()), uploaderRole }}
                    />
                )}
            </NotarizeContainer>
        </>
    );
};

export default Notarize;