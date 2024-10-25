import styled from 'styled-components';

const WebCamContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    border: none;   
    overflow: hidden;
    padding: 0;
    background-color: black; 
    
    @media (max-width: 768px) {
        width: 100vw;    /* Full screen on tablets */
        height: 100vh;   /* Full height on tablets */
    }

    @media (max-width: 480px) {
        width: 100vw;    /* Full width on mobile */
        height: 100vh;   /* Full height on mobile */
    }
`;

const ButtonWrapper = styled.div`
    position: absolute;
    bottom: 2rem; 
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 30%;
    background-color: ${props => props.theme.colors.seconderyLight};

    @media (max-width: 768px) {
        bottom: 1.5rem;  /* Adjust for smaller screens */
    }

    @media (max-width: 480px) {
        bottom: 1rem;    /* Adjust for mobile screens */
    }
`;

const PreviewImageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
        max-width: 100%; /* Ensure the image scales properly */
        max-height: 80%; /* Limit height to avoid overflow */
    }

    @media (max-width: 768px) {
        width: 100vw;    /* Full screen on tablets */
        height: 100vh;   /* Full height on tablets */
    }

    @media (max-width: 480px) {
        width: 100vw;    /* Full width on mobile */
        height: 100vh;   /* Full height on mobile */
    }
`;

const PreviewText = styled.p`
    color: ${props => props.theme.colors.primaryLight}; /* Text color */
    margin: 1rem; /* Space around the text */
    font-size: 1.5rem; /* Adjust font size */
`;

const PreviewButtonsWrapper = styled.div`
    display: flex;
    direction: row;
    gap: 1rem;

    @media (max-width: 768px) {
        gap: 0.5rem;
    }`


export { WebCamContainer, ButtonWrapper, PreviewImageContainer, PreviewText, PreviewButtonsWrapper };
