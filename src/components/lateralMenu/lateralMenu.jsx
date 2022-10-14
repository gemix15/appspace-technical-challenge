import React from 'react';
import Filter from './filter/filter';
import {LateralMenuContainer} from './lateralMenu.styled';

const LateralMenu = ({ setPageNumber, setGender, setSpecies }) => {
    
    return (
        <LateralMenuContainer>
            <Filter setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber}></Filter>
        </LateralMenuContainer>
    );
}

export default LateralMenu;
