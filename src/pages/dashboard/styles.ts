import styled from "styled-components";

export const DashboardContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1.5rem;
    background-color: ${props => props.theme.colors.primaryLight};
    min-height: 100vh;
    border-radius: 8px;
    max-width: 90%;
    margin: auto;
`;

export const PropertyList = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
    margin: 2rem 0;
`;

export const PropertyItem = styled.li`
    background: ${props => props.theme.colors.seconderyLight};
    padding: 1rem;
    margin: 0.5rem 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
`;
