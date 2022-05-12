import React from "react";
import { ContainerBase, SubHeader, ContainerColumn, InputAddressContainer, Square } from "./styles";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Line from "../../../components/line";
import Footer from "../../../components/footer";
import DescriptionInput from "../../../components/description-input";
import Button from '../../../components/form-button';
import Input from "../../../components/input";

const Iluminacao = () => {
    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_conservacao_urbana.png"
                        titulo = "Conservação Urbana"
                    />
                    <ContainerColumn>
                        <h1> Iluminação Pública </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <InputAddressContainer>
                        <Input title="Endereço" width="36vw"/>
                        <Input title="Nº" width="7vw"/>
                    </InputAddressContainer>
                    <Input title="Ponto de Referência" placeholder="Opcional"/>
                    <DescriptionInput/>
                    <Button text="Enviar"/> 
                </Square>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Iluminacao;