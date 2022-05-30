import React from 'react';

import Button from "../styled-components/form-button";
import DescriptionInput from '../description-input';
import InputPhotos from '../images-input';
import Input from '../input';

import { 
    Container,
    InputAddressContainer,
    InputLocalization, 
} from './styles'

const Form = () => {
    return (
        <Container>
            <InputLocalization>Usar Localização Atual</InputLocalization>
            <p>OU</p>
            <InputAddressContainer>
                <Input title="Endereço:" width="36vw" />
                <Input title="Nº" width="7vw" />
            </InputAddressContainer>
            <Input
                title="Ponto de Referência:"
                placeholder="Opcional"
            />
            <DescriptionInput
                title="Descrição:"
                placeholder="Conte-nos em detalhes sobre o problema encontrado."
            />
            <InputPhotos />
            <Button text="Enviar" />
        </Container>
    );
}

export default Form; 