import React from "react";
import { Container } from "./styles";

const InputPhotos = () => {
    return (
        <Container>
            <label>Insira as Fotos (Opcional): </label>
            <input type="file"/>
        </Container>
    )
}

export default InputPhotos;