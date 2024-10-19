import styled from "styled-components";

export const InfoButton = styled.button`
    background-color: ${props => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.primary};
    padding: 0.8rem, 1.5rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: ${(props) => props.theme.fontSizes.medium};

    &:hover {
        background-color: ${(props) => props.theme.colors.seconderyLight};
    }
`