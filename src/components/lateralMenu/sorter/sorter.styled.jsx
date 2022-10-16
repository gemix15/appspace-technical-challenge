import styled from "styled-components";

export const SorterContainer = styled.div `
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    width: auto;
    height: auto;
    border-radius: 5px;
    padding: 1.5rem;  
    text-align: center;
    justify-content: center;
    gap: .7rem;
    @media (max-width: 576px){
        margin: .2rem;
    }
`

export const SorterTitle = styled.h1 `
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0;
`

export const SorterButton = styled.button `
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    display: inline-block;
    width: auto;
    text-align: center;
    text-decoration: none;
    height: 2rem;
    margin: .4rem 0;
    padding: .3rem;
    font-size: .95rem;
    color: white;
    background-color: #3e8914;
    border-radius: 5px;
    border: 2px solid #3e8914;
    user-select: none;
    cursor: pointer;
    :hover {
        background-color: #134611;
        border: 2px solid #134611;
    }
    .active {
        background-color: #134611;
        border: 2px solid #134611;
    }
`
