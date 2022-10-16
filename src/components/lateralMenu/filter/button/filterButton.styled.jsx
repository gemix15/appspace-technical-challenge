import styled from "styled-components";

export const FilterForm = styled.form `
    display: block;
    margin: 0.3rem auto;
`

export const FilterInput = styled.input `
    display: none;
`

export const FilterLabel = styled.label `
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    width: fit-content;
    height: 2rem;
    display: inline-block;
    padding: .2rem;
    color: white;
    background-color: #3e8914;
    border: 2px solid #3e8914;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    line-height: 1.5;
    font-size: .95rem;
    cursor: pointer;
    user-select: none;
    :hover {
        background-color: #134611;
        border: 2px solid #134611;
    }
    @media (max-width: 576px){
        height: 1.2rem;
    }
`