import { styled } from "styled-components";

const NotarizeContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const AddImageButton = styled.button`
  width: 100%;
  padding: 15px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  &:active {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const UploadMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.seconderyPrimary};
  padding: 10px 20px;
  border-radius: 4px;
  margin: 10px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export { NotarizeContainer, Title, AddImageButton, UploadMessage }