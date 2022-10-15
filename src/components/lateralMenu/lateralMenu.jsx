import React from 'react';
import Filter from './filter/filter';
import {LateralMenuContainer} from './lateralMenu.styled';
import Sorter from "./sorter/sorter";

const LateralMenu = ({ setPageNumber, setGender, setSpecies, setOrderByField }) => {
    
    return (
        <LateralMenuContainer>
            <Sorter setResult={setOrderByField} setPageNumber={setPageNumber}></Sorter>
            <Filter setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber}></Filter>
        </LateralMenuContainer>
    );
}

export default LateralMenu;
