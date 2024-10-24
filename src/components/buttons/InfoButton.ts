import styled from "styled-components";

export const InfoButton = styled.button`
    background-color: ${props => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.primary};
    padding: 0.5rem;
    width: 10vw;
    height: 30px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: ${(props) => props.theme.fontSizes.medium};
    min-width: 100px;
    min-height: 30px;

    &:hover {
        background-color: ${(props) => props.theme.colors.seconderyLight};
    }
`;
