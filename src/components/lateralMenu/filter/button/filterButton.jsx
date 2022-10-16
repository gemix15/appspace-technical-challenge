import React from "react";
import { FilterForm, FilterInput, FilterLabel } from "./filterButton.styled";

const FilterButton = ({ input, task, setPageNumber, index, name }) => {
    return (
        <FilterForm>
            <FilterInput type="radio" name={name} id={`${name}-${index}`}></FilterInput>
            <FilterLabel className='active' htmlFor={`${name}-${index}`} onClick={(x) => {
                task(input);
                setPageNumber(1);
            }}>{input}</FilterLabel>
        </FilterForm>
    );
};

export default FilterButton;
