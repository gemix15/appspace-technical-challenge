import React, { useState, useEffect } from "react";
import { Column, Container, Row, Title } from "./styles/app.style";


const App = () => {

return (
    <div className="App">
        <Title>Characters</Title>
        <Container>
            <Row>
                Filter Component 
                <Column>
                    <Row>
                        Card component
                    </Row>
                </Column>
            </Row>
        </Container>
    </div>
)}
export default App;
