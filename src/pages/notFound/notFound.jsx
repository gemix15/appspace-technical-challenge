import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rick from "../../img/Rick-notFound.png";
import { NotFoundImage, NotFoundText, NotFoundButton } from './notFound.styled';

const NotFound = () => {
    let navigate = useNavigate();

    return (
        <>
            <NotFoundImage alt='Not Found' src={Rick} />
            <NotFoundText>Oops! Not Found!</NotFoundText>
            <NotFoundButton onClick={() => navigate('/')}>Back to Home</NotFoundButton>
        </>
    );
}

export default NotFound;
