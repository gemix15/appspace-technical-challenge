import styled from "styled-components";

export const AccordionItem = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 2%;
    text-align: center;
`

export const AccordionButton = styled.button `
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem;
    font-size: 1rem;
    color: white;
    text-align: right;
    background-color: #134611;
    border: 2px solid #134611;
    border-radius: 5px;
    overflow-anchor: none;
    :hover{
        background-color: #3e8914;
        border: 2px solid #3e8914;
    }
`

export const AccordionBody = styled.div `
    padding: ${(props) => (props.open ? '0.3rem;' : '0')};
    display: flex;
    flex-wrap: wrap;
    gap: .7rem;
    width: 100%;
    max-height: ${(props) => (props.open ? '300px' : '0')};
    transition: all 0.4s ease-in-out;
    overflow: hidden;
    padding-bottom: ${(props) => (props.open ? '1rem;' : '0')};
`