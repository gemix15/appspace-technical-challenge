import React from "react";
import RickLoading from "../../img/Rick-loading.png";
import { LoadingImage, LoadingText } from "./loading.styled";

const Loading = () => {
    return (
        <>
            <LoadingText>Loading...</LoadingText>
            <LoadingImage alt='Loading' src={RickLoading} />
        </>
    );
};

export default Loading;
