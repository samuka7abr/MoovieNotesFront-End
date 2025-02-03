import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;

    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";
    >main{
        grid-area: "content";
        padding: 40px 123px 156px 123px ;

        overflow-y: auto;
        scrollbar-color: ${({theme}) => theme.COLORS.GRAY} ${({theme}) => theme.COLORS.MAIN_BACKGROUND} ;
        scrollbar-width: thin;
    }
`;

export const Content = styled.div`
    
    > svg{
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.BLUE};
    }
    > div{
        margin-top: 40px;
        margin-bottom: 40px;
        gap: 8px;
    }
`;

export const About = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    margin-top: 24px;
    > p{
        svg{
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.BLUE};
    }}
    >img{
        width: 16px;
        height: 16px;
        border-radius: 50%;
    }
`;

export const Rating = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    > svg{
        font-size: 16px;
        color: ${({theme}) => theme.COLORS.BLUE};
    }
`;