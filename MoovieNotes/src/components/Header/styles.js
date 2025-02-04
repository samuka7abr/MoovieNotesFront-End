import styled from "styled-components";

export const Container = styled.header`
 
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 64px;
    width: 100%;
    height: 116px;


    border-bottom: 1px solid;
    border-bottom-color: ${({theme}) => theme.COLORS.GRAY} ;

    >h1{
        margin-left: 123px;
        color: ${({theme}) => theme.COLORS.BLUE};
        font-size: 24px;
    }
    
    >input{
        width: 800px;
        height: 56px;
        background-color: ${({theme}) => theme.COLORS.GRAY};
        border: none;
        border-radius: 6px;
        padding: 19px;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 16px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 9px;
        line-height: 24px;

        span{
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
            margin-left: 95px
        }
        
        strong{
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

`;



