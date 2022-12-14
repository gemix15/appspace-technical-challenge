import styled from "styled-components";


export const Title = styled.h1 `
    text-align: center;
    margin-bottom: 2rem;
    font-family: Arial, Helvetica, sans-serif;
`;

export const Logo = styled.img `
    width: auto; 
    height: 6rem;
    margin-bottom: -1rem;
`;

export const Container = styled.div `
    padding: 0 15px;
    margin: 2rem auto;
    @media (min-width: 768px){
        width: 750px;
    }
    @media (min-width: 992px){
        width: 970px;
    }
    @media (min-width: 1200px){
        width: 1170px;
    }
`;

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
`;

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    @media (min-width: 992px){
        width: 66.66666667%;
    }
`;