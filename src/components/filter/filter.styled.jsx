import styled from "styled-components";

export const FilterContainer = styled.div `
    flex: 0 0 auto;
    width: 25%;
    margin-bottom: 3rem;
    font-family: Arial, Helvetica, sans-serif;
    @media (max-width: 576px){
        width: 100%;
    }
`

export const FilterTitle = styled.h1 `
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`

export const FilterText = styled.p `
    text-decoration: underline;
    color: blueviolet;
    text-align: center;
    margin-bottom: 0.7rem;
    cursor: pointer;
    font-size: .9rem;
`

export const FilterAccordion = styled.div `
    color: blueviolet;
    background-color: white;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
    padding: 1rem 1.2rem;
`