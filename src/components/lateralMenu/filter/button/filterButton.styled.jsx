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
    background-color: blueviolet;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    line-height: 1.5;
    font-size: .95rem;
    cursor: pointer;
    /* border-radius: 5%; */
    border: 2px solid blueviolet;
    user-select: none;
    :hover {
        background-color: rebeccapurple;
        border: 2px solid rebeccapurple;
    }
    .active {
        background-color: rebeccapurple;
        border: 2px solid rebeccapurple;
    }
`