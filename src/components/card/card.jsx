import React from 'react'
import { Link } from "react-router-dom";
import { CardContainer, CardContent, CardImg, CardText, CardTitle, InnerCard } from './card.styled';

const Card = ({page, characters}) => {

    let cardInfo;

    if (characters) { 
        cardInfo = characters.map((character) => {
            let { id, image, name, location } = character;
            return (
                <Link to={`${page}${id}`} key={id} style={{width: "33.3%", textDecoration: "none", color: "black"}}>
                    <CardContainer>
                        <InnerCard>
                            <CardImg src={image} alt=''></CardImg>
                            <CardContent>
                                <CardTitle>{name}</CardTitle>
                                <div>
                                    <CardText>Last Location</CardText>
                                    <p>{location.name}</p>
                                </div>
                            </CardContent>
                        </InnerCard>
                    </CardContainer>
                </Link>
            )
        })
    } else {
        cardInfo = 'No characters Found...';
    }

    return (
        <>{cardInfo}</>
    )
}

export default Card;

