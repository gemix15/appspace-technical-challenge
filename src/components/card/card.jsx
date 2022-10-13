import React from 'react'
import { CardContainer } from './card.style';

const Card = ({characters}) => {

    // console.log('FromCard');
    // console.log(characters);

    let cardInfo;

    if (characters) {
        cardInfo = characters.map((character) => {
            let { id, image, name, location } = character;
            return (
                <CardContainer></CardContainer>
            )
        })
    }

    return (
        <>{cardInfo}</>
    )
}

export default Card;

