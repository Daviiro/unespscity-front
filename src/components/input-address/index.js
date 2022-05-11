import React from "react";
import { Container, InputNumber, InputRefPoint, InputStreet, InputTitle } from "./styles";

const InputAddress = () => {
    return(
        <Container>
            <InputTitle>Endereço: </InputTitle>
            <InputStreet
                type={"text"}
            />
            <InputTitle>Nº: </InputTitle>
            <InputNumber 
                type={"number"}
            />
            <InputTitle>Ponto de Referência: </InputTitle>
            <InputRefPoint 
                type={"text"}
            />
        </Container>
    )
}

export default InputAddress; 