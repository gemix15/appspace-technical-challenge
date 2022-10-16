import styled from "styled-components";

export const SearchForm = styled.form `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 5px;
`;

export const SearchInput = styled.input `
    width: 40%;
    border-radius: 7px;
    border: 2px solid #134611;
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    padding: 10px 15px;
    &:focus {outline: none;}
    @media (max-width: 576px){
        width: 90%;
    }
`;

export const SearchBtn = styled.button `
    box-shadow: 1px 3px 9px rgba(0, 0, 0, 0.25);
    width: 5rem;
    height: 3rem;
    display: inline-block;
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
    @media (max-width: 576px){
        display: none;
    }
`; 