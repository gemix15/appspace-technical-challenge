import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CardDetailBack, CardDetailContainer, CardDetailGeneral, CardDetailImage, CardDetailSpan, CardDetailTitle } from './cardDetails.styled';
import Rick from "../../../img/rick.png";

const CardDetails = () => {
    let {id} = useParams();
    const [data, setData] = useState([]);
    let { name, status, species, type, gender, origin, location, image } = data;

    let api = `https://rickandmortyapi.com/api/character/${id}`;

    useEffect(() => {
        (async function (){
            let response = await fetch(api).then((res) => res.json());
            setData(response);
        })();
    }, [api]);

    let navigate = useNavigate();

    if(data?.error) {
        return (
            <>
                <CardDetailBack onClick={() => navigate('/')}>Back</CardDetailBack>
                <img alt='Rick found no characters.' src={Rick} style={{width:"auto", height:"15rem"}}></img>
            </>
        )
    }
    return (
        <>
            <CardDetailBack onClick={() => navigate('/')}>Back</CardDetailBack>
            <CardDetailGeneral>
                <CardDetailContainer>
                    <CardDetailTitle>{name}</CardDetailTitle>
                    <CardDetailImage src={image} alt=""></CardDetailImage>
                    <div style={{backgroundColor: "#e8fccf", borderRadius: "5px", padding:"1rem"}}>
                        <div>
                            <CardDetailSpan>Status: </CardDetailSpan>{status}
                        </div>
                        <div>
                            <CardDetailSpan>Gender: </CardDetailSpan>{gender}
                        </div>
                        <div>
                            <CardDetailSpan>Location: </CardDetailSpan>{location?.name}
                        </div>
                        <div>
                            <CardDetailSpan>Origin: </CardDetailSpan>{origin?.name}
                        </div>
                        <div>
                            <CardDetailSpan>Species: </CardDetailSpan>{species}
                        </div>
                        <div>
                            <CardDetailSpan>Type: </CardDetailSpan>{type === '' ? "unknown" : type}
                        </div>
                    </div>
                </CardDetailContainer>
            </CardDetailGeneral>
        </>
    );
}

export default CardDetails;
