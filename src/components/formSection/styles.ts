import styled from "styled-components";

const SectionContainer = styled.section<{ bgcolor: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 2rem;
    background-color: ${props => props.bgcolor};
    box-sizing: border-box;
    min-height: 100vh;    
`;

const ContentWrapper = styled.div`
    flex: 1;
    max-width: 31.25rem;
    padding: 2rem;
`;

const Title = styled.h2`
    font-size: ${props => props.theme.fontSizes.large};
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.text};
`;

const SubTitle = styled.h2`
    font-size: ${props => props.theme.fontSizes.medium};
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.text};
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
`;

const FormField = styled.div`
    display: flex;
    flex-direction: column;
`;

const Lable = styled.label`
    font-size: ${props => props.theme.fontSizes.medium};
    color: ${props => props.theme.colors.text};
    margin-bottom: 0.5rem;
    display: flex; 
    align-items: center; 
`;

const Input = styled.input`
    padding: 0.8rem;
    border-radius: 4px;
    border: 1px solid ${props => props.theme.colors.seconderyLight};
    background-color: ${props => props.theme.colors.primaryLight};
    color: ${props => props.theme.colors.textDark};
    font-size: ${props => props.theme.fontSizes.medium};
    margin-right: 0.5rem; 
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ErrorText = styled.span`
    color: red;
`;

const LoadingText = styled.span`
    color: '#ccc';
`


export { SectionContainer, ContentWrapper, Title, SubTitle, FormWrapper, FormField, Lable, Input, ButtonWrapper, ErrorText, LoadingText };
