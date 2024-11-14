import styled from "styled-components";

export const DashboardContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    background-color: ${props => props.theme.colors.seconderyPrimary};
    min-height: 100vh;
    box-sizing: border-box;
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.main};
    
    @media (max-width: 768px) {
        padding: 2rem 1rem;
    }
`;

export const ContentWrapper = styled.div`
    flex: 1;
    width: 100%;
    max-width: 50rem;
    padding: 2rem;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
    font-size: ${props => props.theme.fontSizes.large};
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.text};
    text-align: center;
`;

export const PropertyItem = styled.li`
    background: ${props => props.theme.colors.primaryLight};
    padding: 1.5rem;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
    }
`;


export const PropertyList = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
    margin: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const PropertyInfo = styled.div`
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.textDark};
`;
