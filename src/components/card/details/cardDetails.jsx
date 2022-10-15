import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CardDBack, CardDContainer, CardDGeneral, CardDImg, CardDSpan, CardDTitle } from './cardDetails.styled';

const CardDetails = () => {
    let {id} = useParams();
    const [data, setData] = useState([]);
    let { name, location, origin, gender, image, species } = data;

    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function (){
            let response = await fetch(api).then((res) => res.json());
            setData(response);
        })();
    }, [api]);

    let navigate = useNavigate();

    return (
        <>
            <CardDBack onClick={() => navigate(-1)}>Back</CardDBack>
            <CardDGeneral>
                <CardDContainer>
                    <CardDTitle>{name}</CardDTitle>
                    <CardDImg src={image} alt=""></CardDImg>
                    <div style={{backgroundColor: "#e8fccf", borderRadius: "5px", padding:"1rem"}}>
                        <div>
                            <CardDSpan>Gender: </CardDSpan>{gender}
                        </div>
                        <div>
                            <CardDSpan>Location: </CardDSpan>{location?.name}
                        </div>
                        <div>
                            <CardDSpan>Origin: </CardDSpan>{origin?.name}
                        </div>
                        <div>
                            <CardDSpan>Species: </CardDSpan>{species}
                        </div>
                    </div>
                </CardDContainer>
            </CardDGeneral>
        </>
    );
}

export default CardDetails;
