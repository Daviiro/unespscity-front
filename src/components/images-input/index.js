import React, { useState } from "react";
import { Container } from "./styles";

const InputPhotos = (props) => {

    function handleFileInputChange(e) {
        let reader = new FileReader();
        reader.readAsDataURL(e.currentTarget.files[0]);
        const hasPhoto = props.photos.find(photo => photo === reader.result)
        reader.onload = () => {
            if (hasPhoto !== undefined)
                return;
            props.setPhotos((prevState) => [...prevState, reader.result]);
        };
    }

    return (
        <Container>
            <label>Insira as Fotos (Opcional): </label>
            <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleFileInputChange(e)}
            />
            <div>
                {props.photos &&
                    props.photos.map((photo) => (
                        <img
                            src={photo}
                            alt="foto"
                            key={photo}
                        />
                    ))
                }
            </div>
        </Container>
    )
}

export default InputPhotos;