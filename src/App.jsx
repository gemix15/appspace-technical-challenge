import React, { useState, useEffect } from "react";
import Card from "./components/card/card";
import Search from "./components/search/search";
import { Column, Container, Row, Title } from "./styles/app.style";
import useApi from "./utils/useApi";


const App = () => {
    // const { info, results } = useApi();
    // console.log(info);
    // console.log(results);

    const [data, setData] = useState([]);
    let { info, results } = data;

    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

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
                Filter Component 
                <Column>
                    <Row>
                        <Card characters={results}></Card>
                    </Row>
                </Column>
            </Row>
        </Container>
    </div>
)}
export default App;
