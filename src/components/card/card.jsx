import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, CardContent, CardImg, CardText, CardTitle, InnerCard } from "./card.styled";
import Rick from "../../img/Rick-notFound.png";

const Card = ({page, characters, orderByField}) => {

    let cardInfo;

    if(characters){
        if (orderByField === "Name") {
            characters = [...characters].sort((a, b) => a.name > b.name ? 1 : -1,);
        }

    if (characters) { 
        cardInfo = characters.map((character) => {
            let { id, image, name, status, species } = character;
            return (
                <Link to={`${page}${id}`} key={id} style={{width: "auto", textDecoration: "none", color: "black", margin:"auto"}}>
                    <CardContainer>
                        <InnerCard>
                            <CardImg src={image} alt=''></CardImg>
                            <CardContent>
                                <CardTitle>{name}</CardTitle>
                                <div>
                                    <CardText>{species}</CardText>
                                    <CardText>{status}</CardText>
                                </div>
                            </CardContent>
                        </InnerCard>
                    </CardContainer>
                </Link>
            );
        });}
    } else {
        cardInfo = <img alt='Rick found no characters.' src={Rick} style={{width:"auto", height:"15rem"}}></img>;
    }

    return (
        <>{cardInfo}</>
    );
};

export default Card;

