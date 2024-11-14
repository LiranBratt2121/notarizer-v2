import { styled } from "styled-components";

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

export const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
    
    @media (max-width: 768px) {
        justify-content: stretch;
    }
`;