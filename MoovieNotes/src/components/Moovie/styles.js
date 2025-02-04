import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    width: 1120px;
    height: 223px;
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 6px;
    padding: 32px;
    margin-bottom: 24px;

    display: block;
    text-decoration: none;
    color: inherit;

    > h1 {
        margin-bottom: 8px;
        font-size: 24px;
    }

    &:hover {
        filter: brightness(0.9);
    }
`;


export const Description = styled.p`
    font-size: 16px;
    color: ${({theme}) => theme.COLORS.LIGHT_GRAY};
    margin-top: 15px;
`;

export const Rating = styled.div`
    font-size: 12px;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 15px;

`;
