import styled from "styled-components";

export const PropertyContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1.5rem;
    background-color: ${props => props.theme.colors.primaryLight};
    box-sizing: border-box;
    min-height: 100vh;
    border-radius: 8px;
    max-width: 90%;
    margin: auto;

    @media (min-width: 768px) {
        padding: 4rem 2rem;
        max-width: 75%;
    }

    @media (min-width: 1024px) {
        max-width: 60%;
    }
`;

export const Title = styled.h2`
    font-size: ${props => props.theme.fontSizes.medium};
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.textDark};

    @media (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes.bigger};
    }
`;

export const PropertyDetails = styled.div`
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: ${props => props.theme.fontSizes.small};

    @media (min-width: 768px) {
        font-size: ${props => props.theme.fontSizes.medium};
    }
`;

export const PropertyImages = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PropertyImage = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 0.5rem;
    border: 1px solid ${props => props.theme.colors.seconderyLight};

    @media (min-width: 768px) {
        width: 100px;
        height: 100px;
    }

    @media (min-width: 1024px) {
        width: 120px;
        height: 120px;
    }
`;

export const Text = styled.p`
    font-size: ${props => props.theme.fontSizes.medium}; 
    font-weight: 'normal';
    color: ${props => props.color || props.theme.colors.textDark};
    margin: 0;
`;