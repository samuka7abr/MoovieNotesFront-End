import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main{
        grid-area: "content";
        padding: 40px 106px 40px 123px;
        overflow-y: auto;
        
    }
`;    

export const Form = styled.form`

    > header{
        
        h1{
            margin-top: 24px;
            font-weight: normal;
        }

        svg{
            color: ${({theme}) => theme.COLORS.BLUE};

        }
    }
    
    >div{
        margin: 40px 0 40px 0;
        display: flex;
        gap: 40px
    }

    >h2{
        color: ${({theme}) => theme.COLORS.LIGHT_GRAY};
        font-weight: normal;
        margin-top: 40px;
        font-size: 20px;
    }
`;

export const Markers = styled.div `
    padding: 16px;
    display: flex;
    gap: 24px;
    background-color: ${({theme}) => theme.COLORS.DARK_GRAY};
    height: 90px;
    border-radius: 8px

`;

export const Controls = styled.div`
    .exclude{
            background-color: ${({theme}) => theme.COLORS.DARK_GRAY};
            color: ${({theme}) => theme.COLORS.BLUE};
        }
    
`;