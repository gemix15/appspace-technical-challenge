import React from 'react';
import Category from './category/category';
import { FilterAccordion, FilterContainer, FilterText, FilterTitle } from './filter.styled';

const Filter = ({ setPageNumber, setGender, setSpecies }) => {
    
    let genderFilters = ["Female", "Male", "Genderless", "Unknown"];
    let speciesFilters = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological",
    "Unknown", "Animal", "Disease", "Robot", "Cronenberg", "Planet"];

    let clear = () => {
        setGender('');
        setSpecies('');
        setPageNumber(1);
        window.location.reload(false);
    }

    return (
        <FilterContainer>
            <FilterTitle>Filters</FilterTitle>
            <FilterText onClick={clear}>Clear Filters</FilterText>
            <FilterAccordion id='accordion'>
                <Category title="Gender" setPageNumber={setPageNumber} categories={genderFilters} setCategory={setGender}></Category>
                <Category title="Species" setPageNumber={setPageNumber} categories={speciesFilters} setCategory={setSpecies}></Category>
            </FilterAccordion>
        </FilterContainer>
    );
}

export default Filter;
