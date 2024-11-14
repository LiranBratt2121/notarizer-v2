import { styled } from "styled-components";

export const CTAButton = styled.button`
    background-color: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.textDark};
    padding: 1rem 2rem;
    font-size: ${props => props.theme.fontSizes.medium};
    font-weight: bold;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: ${props => props.theme.colors.seconderyLight};
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.98);
    }

    @media (max-width: 768px) {
        font-size: ${props => props.theme.fontSizes.small};
        padding: 0.8rem 1.5rem;
    }
`;