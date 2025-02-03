import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    color: ${({ theme }) => theme.COLORS.DARK_GRAY};

    height: 56px;
    border: none;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
`;
   

