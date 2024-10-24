import styled from "styled-components";

export const CameraButton = styled.button`
    background-color: ${(props) => props.theme.colors.primaryLight};
    color: ${(props) => props.theme.colors.primary};
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 50%; /* Makes the button circular */
    cursor: pointer;
    font-size: ${(props) => props.theme.fontSizes.medium};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    &:hover {
        transition: 0.5s;
        background-color: ${(props) => props.theme.colors.primary};
    }

    &:active {
        box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
    }
`;
