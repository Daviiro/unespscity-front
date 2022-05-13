import React from 'react'; 
import { Container, SubTitle, Text, Title } from './styles';

const UsefulPhoneCard = (props) => {
    return (
        <Container>
            <img src={props.src} alt={props.alt}/>
            <Title>{props.name}</Title>
            <SubTitle>{props.phone}</SubTitle>
            <Text>{props.text}</Text>
        </Container>
    )
}

export default UsefulPhoneCard;