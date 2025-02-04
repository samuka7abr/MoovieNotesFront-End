import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    background: none;
    color: ${({theme}) => theme.COLORS.BLUE};
    border: none;
    font-size: 16px;
    &:hover {
      opacity: 0.8;
    }
`;