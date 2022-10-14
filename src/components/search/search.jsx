import React from 'react';
import { SearchBtn, SearchForm, SearchInput } from './search.styled';

const Search = ({ setSearch, setPageNumber }) => {
    let searchButton = (r) => {
        r.preventDefault();
    };

    return (
        <SearchForm>
            <SearchInput onChange={(r) => {
                setPageNumber(1);
                setSearch(r.target.value);
            }} placeholder="Search characters" type='text'></SearchInput>
            <SearchBtn onClick={searchButton}>Search</SearchBtn>
        </SearchForm>
    );
}

export default Search;
