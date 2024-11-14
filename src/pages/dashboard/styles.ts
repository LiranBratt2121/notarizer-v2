import styled from "styled-components";

// Dashboard container with dark and cool style, mobile responsive
export const DashboardContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1.5rem;
    background-color: ${props => props.theme.colors.seconderyPrimary};
    min-height: 100vh;
    border-radius: 8px;
    max-width: 90%;
    margin: auto;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.main};
    
    @media (max-width: 768px) {
        padding: 2rem 1rem; // Reduced padding on smaller screens
    }
`;

// Property list styling
export const PropertyList = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
    margin: 2rem 0;
    
    @media (max-width: 768px) {
        margin: 1.5rem 0; // Reduce margins on mobile
    }
`;

// Each property item styling
export const PropertyItem = styled.li`
    background: ${props => props.theme.colors.seconderyLight};
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: ${props => props.theme.fontSizes.medium};
    
    @media (max-width: 768px) {
        padding: 0.8rem; // Reduce padding for smaller screens
        margin: 0.4rem 0; // Adjust margin
    }
`;

// Button container for layout
export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
    
    @media (max-width: 768px) {
        gap: 0.8rem; // Reduce gap between buttons on mobile
    }
`;

// Button styling with dark and sleek design, mobile-friendly
export const ButtonWrapper = styled.button`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    border: none;
    font-size: ${props => props.theme.fontSizes.small};
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
        background-color: ${props => props.theme.colors.seconderyPrimary};
    }

    &:active {
        transform: scale(0.98);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme.colors.primary};
    }

    @media (max-width: 768px) {
        font-size: ${props => props.theme.fontSizes.smaller}; // Adjust font size for mobile
        padding: 0.6rem 1.2rem; // Smaller padding on mobile
    }
`;
