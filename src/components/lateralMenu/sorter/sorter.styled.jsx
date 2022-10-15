import styled from "styled-components";

export const SorterContainer = styled.div `
    width: auto;
    height: auto;
    margin: 2rem;
    border-radius: 5px;
    padding: 1.5rem;
`

export const SorterTitle = styled.h1 `
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`

export const SorterItemContainer = styled.div `
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    height: auto;
    text-align: center;
    gap: .7rem;
`

export const SorterButton = styled.button `
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    display: inline-block;
    width: fit-content;
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
