import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RickMortyLogo from "./img/rick-morty.png";

// Components
import Card from "./components/card/card";
import Search from "./components/search/search";
import Pagination from "./components/pagination/pagination";
import LateralMenu from "./components/lateralMenu/lateralMenu";
import { Column, Container, Logo, Row, Title } from "./styles/app.style";
import CardDetails from "./components/card/details/cardDetails";

function App() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<CardDetails />} />
          </Routes>
        </div>
      </Router>
    );
  }

const Home = () => {

    const [data, setData] = useState([]);
    let { info, results } = data;

    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");    

    const [gender, setGender] = useState("");    
    const [species, setSpecies] = useState("");
    const [orderByField, setOrderByField] = useState('');

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&gender=${gender}&species=${species}`;

    useEffect(() => {}, [api]);
    useEffect(() => {
        (async function (){
            let response = await fetch(api).then((res) => res.json());
            setData(response);
        })();
    }, [api]);

return (
    <div>
        <Title><Logo src={RickMortyLogo}></Logo>'s Characters</Title>
        <Search setSearch={setSearch} setPageNumber={setPageNumber}></Search>
        <Container>
            <Row>
                <LateralMenu setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber} setOrderByField={setOrderByField}></LateralMenu>
                <Column>
                    <Row>
                        <Card page="/" characters={results} orderByField={orderByField}></Card>
                    </Row>
                </Column>
            </Row>
        </Container>
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}></Pagination>
    </div>
)}

export default App;
