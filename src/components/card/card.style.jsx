import styled from "styled-components";

export const CardContainer = styled.div `
    position: relative;
    flex: 0 0 auto;
    width: 100%;
    margin-bottom: 1.5rem !important;
    border: 1px solid blue;
    @media (min-width: 992px){
        width: 33.33333333%;
    }
    @media (min-width: 576px){
        width: 50%;
    }
`

