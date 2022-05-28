import React, { useState } from "react";
import { Container } from "./styles";

const InputPhotos = () => {
    const [postImage, setPostImage] = useState({
        myFile: "",
    });
    const [isPhoto, setIsPhoto] = useState(false);
    let base64;

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        base64 = await convertToBase64(file);
        setPostImage({ ...postImage, myFile: base64 });
        setIsPhoto(true);
    };
    
    console.log(base64)

    return (
        <Container>
            <label>Insira as Fotos (Opcional): </label>
            <input 
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e)}
            />
            {
                isPhoto && 
                (
                    <img 
                        src={base64}
                        alt="foto"
                    />
                )
            }
        </Container>
    )
}

export default InputPhotos;