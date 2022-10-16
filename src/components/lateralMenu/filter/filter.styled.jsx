import styled from "styled-components";

export const FilterTitle = styled.h1 `
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    @media ( max-width:576px){
        margin-top: 0;
    }
`

export const FilterText = styled.p `
    text-decoration: underline;
    color: #3e8914;
    text-align: center;
    margin-bottom: 0.7rem;
    cursor: pointer;
    font-size: .9rem;
    :hover{
        color: #134611;
    }
    @media ( max-width:576px){
        margin-bottom: 0;
    }
`

export const FilterAccordion = styled.div `
    padding: 1rem 1.2rem;
`