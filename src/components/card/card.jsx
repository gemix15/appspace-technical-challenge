import React from 'react'
import { CardContainer, CardContent, CardImg, CardText, CardTitle, InnerCard } from './card.style';

const Card = ({characters}) => {

    // console.log('FromCard');
    // console.log(characters);

    let cardInfo;

    if (characters) {
        cardInfo = characters.map((character) => {
            let { id, image, name, location } = character;
            return (
                <CardContainer key={id}>
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

