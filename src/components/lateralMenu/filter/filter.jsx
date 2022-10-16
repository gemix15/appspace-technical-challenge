import React from "react";
import { FilterAccordion, FilterText, FilterTitle } from "./filter.styled";
import Category from "./category/category";

const Filter = ({ setPageNumber, setGender, setSpecies }) => {
    let genderFilters = ["Female", "Male", "Genderless", "Unknown"];
    let speciesFilters = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological",
    "Unknown", "Animal", "Disease", "Robot", "Cronenberg", "Planet"];

    let clear = () => {
        setGender("");
        setSpecies("");
        setPageNumber(1);
        window.location.reload(false);
    };

    return (
        <>
        <FilterTitle>Filters</FilterTitle>
        <FilterText onClick={clear}>Clear Filters</FilterText>
        <FilterAccordion id='accordion'>
            <Category title="Gender" setPageNumber={setPageNumber} categories={genderFilters} setCategory={setGender}></Category>
            <Category title="Species" setPageNumber={setPageNumber} categories={speciesFilters} setCategory={setSpecies}></Category>
        </FilterAccordion>
        </>
    );
};

export default Filter;
