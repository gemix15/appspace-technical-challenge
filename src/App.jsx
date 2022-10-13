import React, { useState, useEffect } from "react";
import Card from "./components/card/card";
import Search from "./components/search/search";
import Pagination from "./components/pagination/pagination";
import Filter from "./components/filter/filter";
import { Column, Container, Row, Title } from "./styles/app.style";
import useApi from "./utils/useApi";


const App = () => {

    const [data, setData] = useState([]);
    let { info, results } = data;

    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");    

    const [gender, setGender] = useState("");    
    const [species, setSpecies] = useState("");

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&gender=${gender}&species=${species}`;

    useEffect(() => {}, [api]);
    useEffect(() => {
        (async function (){
            let response = await fetch(api).then((res) => res.json());
            setData(response);
        })();
    }, [api]);

return (
    <div className="App">
        <Title>Characters</Title>
        <Search setSearch={setSearch} setPageNumber={setPageNumber}></Search>
        <Container>
            <Row>
                <Filter pageNumber={pageNumber} setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber}></Filter>
                <Column>
                    <Row>
                        <Card characters={results}></Card>
                    </Row>
                </Column>
            </Row>
        </Container>
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}></Pagination>
    </div>
)}
export default App;
