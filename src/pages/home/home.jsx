import React, { useState, useEffect } from "react";

import RickMortyLogo from "../../img/RickAndMorty-logo.png";

import Card from "../../components/card/card";
import Search from "../../components/search/search";
import Pagination from "../../components/pagination/pagination";
import LateralMenu from "../../components/lateralMenu/lateralMenu";
import { Column, Container, Logo, Row, Title } from "./home.styled";
import Loading from "../../components/loading/loading";

const Home = () => {

    const [loading, setLoading] = useState(true);

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
            setLoading(true);
            let response = await fetch(api).then((res) => res.json());
            setData(response);
            setLoading(false);
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
                        {loading ? <Loading/> :<Card page="/" characters={results} orderByField={orderByField}></Card>}
                    </Row>
                </Column>
            </Row>
        </Container>
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}></Pagination>
    </div>
)}

export default Home;