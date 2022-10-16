import styled from "styled-components";


export const NotFoundImage = styled.img `
    display: block;
    width: auto;
    height: 15rem;
    margin-left: auto;
    margin-right: auto;
`;

export const NotFoundText = styled.h1 `
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
`;

export const NotFoundButton = styled.button `
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    width: 7rem;
    height: 3rem;
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding: 3px;
    color: white;
    background-color: #3e8914;
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 10%;
    border: 2px solid #3e8914;
    :hover {
        background-color: #134611;
        border: 2px solid #134611;
    }
`;