import React, { useState } from "react";
import { Container } from "./styles";

const InputPhotos = () => {
    const [photos, setPhotos] = useState([]);

    function handleFileInputChange(e){ 
        let reader = new FileReader();
        reader.readAsDataURL(e.currentTarget.files[0]);
        const hasPhoto = photos.find(photo => photo === reader.result)
        reader.onload = () => {
            if(hasPhoto !== undefined)
                return; 
            setPhotos((prevState) => [...prevState, reader.result]);
        };
        console.log(photos)
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
                {
                    photos.map( (photo) => (                    
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