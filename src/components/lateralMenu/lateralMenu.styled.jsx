import styled from "styled-components";

export const LateralMenuContainer = styled.div `
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    flex-wrap: wrap;
    width: 25%;
    margin-bottom: 3rem;
    font-family: Arial, Helvetica, sans-serif;
    @media (max-width: 576px){
        width: 100%;
    }
`;