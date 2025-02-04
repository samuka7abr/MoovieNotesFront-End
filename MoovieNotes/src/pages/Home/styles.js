import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas:
    "header"
    "content";
    >div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 123px;
        padding-right: 116px; 
        margin-top: 50px;
        
        >h1{
            font-weight: normal;
            font-size: 32px;
        }

        .button{
            width: fit-content;
            
        }
        align-items: center;
    }
    > main{
        padding: 50px 123px 58px 180px;
        overflow-y: auto;
        grid-area: "content";

        Moovie{

            margin-bottom: 24px;
            width: 100%;
        }
    }
`;
