import { styled } from "styled-components";

export const DarkCTAButton = styled.button`
    background-color: ${props => props.theme.colors.primary}; 
    color: ${props => props.theme.colors.text}; 
    padding: 1rem 2rem;
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: bold;
    border: 5px solid ${props => props.theme.colors.primaryLight}; 
    border-radius: 0.8rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: ${props => props.theme.colors.seconderyPrimary};
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.98);
    }
`;
