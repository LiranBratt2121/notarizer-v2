import styled from "styled-components";

export const InfoButton = styled.button`
    background-color: ${props => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: ${(props) => props.theme.fontSizes.medium};
    min-width: 100px;
    min-height: 30px;
    text-align: center;
    transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;

    &:hover {
        background-color: ${(props) => props.theme.colors.seconderyLight};
    }

    &:active {
        transform: scale(0.98);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme.colors.primary};
    }

    @media (max-width: 768px) {
        font-size: ${(props) => props.theme.fontSizes.small};
        padding: 0.5rem 0.8rem;
        width: auto;
    }
`;