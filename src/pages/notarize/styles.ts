import { styled } from "styled-components";

const NotarizeContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
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

export { NotarizeContainer, Title, AddImageButton }