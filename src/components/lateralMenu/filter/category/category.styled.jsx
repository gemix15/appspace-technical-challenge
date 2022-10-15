import styled from "styled-components";

export const AccordionItem = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
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
    color: rebeccapurple;
    text-align: right;
    background-color: white;
    border: 2px solid rebeccapurple;
    /* border-radius: 7%; */
    overflow-anchor: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
`

export const AccordionBody = styled.div `
    padding: ${(props) => (props.open ? '0.3rem;' : '0')};
    display: flex;
    flex-wrap: wrap;
    gap: .7rem !important;
    width: 100%;
    max-height: ${(props) => (props.open ? '300px' : '0')};
    transition: all 0.4s ease-in-out;
    overflow: hidden;
    padding-bottom: ${(props) => (props.open ? '1rem;' : '0')};
`