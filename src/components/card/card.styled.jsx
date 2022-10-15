import styled from "styled-components";

export const CardContainer = styled.div `
    position: relative;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    margin-bottom: 1.5rem !important;
    font-family: Arial, Helvetica, sans-serif;
`

export const InnerCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid blueviolet;
    border-radius: 25px 0px;
    margin: auto 10px;
`

export const CardImg = styled.img `
    border-radius: 100%;
    margin: 1rem;
    max-width: 100%;
    height: auto;
`

export const CardContent = styled.div `
    padding: 10px;
`

export const CardTitle = styled.h1 `
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 5px;
    color: rebeccapurple;
`
export const CardText = styled.p `
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
`
