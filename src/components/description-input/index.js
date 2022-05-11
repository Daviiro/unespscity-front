import React from 'react';
import { Container, TextInput, Title } from './styles';

const DescriptionInput = () => {
    return (
        <Container>
            <Title>Descrição:</Title>
            <TextInput
                placeholder='Conte com detalhes o problema encontrado'
                rows={7}
            />
        </Container>
    )
}

export default DescriptionInput; 