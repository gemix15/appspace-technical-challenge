import styled from "styled-components";

export const CardDGeneral = styled.div `
    width: 100%;
    padding-right: calc(1.5rem * 0.5);
    padding-left: calc(1.5rem * 0.5);
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
`

export const CardDContainer = styled.div `
    border: 2px solid #134611;
    background-color: #134611;
    box-shadow: 17px 9px 37px -15px rgba(62,137,20,1);
    margin: 0 10px;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`

export const CardDTitle = styled.h1 `
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: black;
    background-color: #96e072;
    padding: 0.5rem;
    border-radius: 5px;
`

export const CardDImg = styled.img `
    max-width: 100%;
    height: auto;
    border-radius: 100%;
`

export const CardDSpan = styled.span `
    font-weight: bold;
    font-size: 1.2rem;
`

export const CardDBack = styled.button `
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    width: 5rem;
    height: 3rem;
    padding: 3px;
    color: white;
    background-color: #3e8914;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 10%;
    border: 2px solid #3e8914;
    :hover {
        background-color: #134611;
        border: 2px solid #134611;
    }
`