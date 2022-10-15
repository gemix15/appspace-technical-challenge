import styled from "styled-components";

export const CardContainer = styled.div `
    position: relative;
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    margin-bottom: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
`

export const InnerCard = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 5px solid #134611;
    border-radius: 5%;
    margin: auto 10px;
    box-shadow: 17px 9px 37px -15px rgba(62,137,20,1);
    transition: all 0.5s;
    :hover {
        box-shadow: 17px 9px 37px -15px rgba(150,224,114,1);
        border: 5px solid #3e8914;
    }
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
    color: #134611;
    border-top: 2px solid #134611;
    padding-top: 0.5rem;
`
export const CardText = styled.p `
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
`
