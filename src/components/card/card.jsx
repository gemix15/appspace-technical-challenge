import React from 'react'
import { Link } from "react-router-dom";
import { CardContainer, CardContent, CardImg, CardText, CardTitle, InnerCard } from './card.styled';

const Card = ({page, characters, orderByField}) => {

    let cardInfo;

    if(characters){
        if (orderByField === 'Name') {
            characters = [...characters].sort((a, b) => a.name > b.name ? 1 : -1,);
        }

    if (characters) { 
        cardInfo = characters.map((character) => {
            let { id, image, name, location, species } = character;
            return (
                <Link to={`${page}${id}`} key={id} style={{width: "auto", textDecoration: "none", color: "black", margin:"auto"}}>
                    <CardContainer>
                        <InnerCard>
                            <CardImg src={image} alt=''></CardImg>
                            <CardContent>
                                <CardTitle>{name}</CardTitle>
                                <div>
                                    <CardText>Species: </CardText>
                                    <p style={{textAlign: "center"}}>{species}</p>
                                </div>
                            </CardContent>
                        </InnerCard>
                    </CardContainer>
                </Link>
            )
        })}
    } else {
        cardInfo = 'No characters Found...';
    }

    return (
        <>{cardInfo}</>
    )
}

export default Card;

