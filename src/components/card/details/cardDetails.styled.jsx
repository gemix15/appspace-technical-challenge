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
    border: 2px solid rebeccapurple;
    margin: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: .5rem;
`

export const CardDTitle = styled.h1 `
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: rebeccapurple;
`

export const CardDImg = styled.img `
    max-width: 100%;
    height: auto;
`

export const CardDSpan = styled.span `
    font-weight: bold;
    font-size: 1.2rem;
    margin: 2rem;
`