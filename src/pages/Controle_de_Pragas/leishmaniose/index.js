import React from "react";

import { ContainerBase, SubHeader, ContainerColumn, InputAddressContainer, Square, Details } from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Line from "../../../components/line";
import ServiceDescription from "../../../components/service-description";
import Input from "../../../components/input";
import DescriptionInput from "../../../components/description-input";
import Button from '../../../components/form-button';
import Footer from "../../../components/footer";

const Leishmaniose = () => {
    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_controle_pragas.png"
                        titulo = "Controle de Pragas"
                    />
                    <ContainerColumn>
                        <h1> Leishmaniose </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <ServiceDescription 
                        description = "Utilize este serviço para informar a localização de focos do mosquito transmissor da Leishmaniose, o mosquito-palha (Phlebotomus pappatasi)."
                    />
                    <Details>
                        <a style = {{textDecoration: "none"}} target = "_blank" href = "https://www.google.com.br/search?q=mosquito+palha&tbm=isch&ved=2ahUKEwi07taox-v3AhVVMrkGHdwDBw8Q2-cCegQIABAA&oq=mosquito+palha&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgAEB46CwgAEIAEELEDEIMBOgQIABBDOggIABCxAxCDAVDwCVjVH2CmJmgAcAB4AIABlAOIAbESkgEKMS4xMi4wLjEuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=BTeGYvTXNtXk5OUP3IeceA&bih=723&biw=1496&hl=pt-BR">
                            <MiniCard
                                source = "/assets/img/Leishmaniose.png"
                                titulo = "Mosquito-Palha"
                            />
                        </a>
                        <InputAddressContainer>
                            <Input title="Endereço:" width="36vw"/>
                            <Input title="Nº" width="7vw"/>
                        </InputAddressContainer>
                        <Input title="Ponto de Referência:" placeholder="Opcional"/>
                        <DescriptionInput placeholder = "Conte-nos em detalhes sobre o problema encontrado." />
                        <Button text = "Enviar"/>
                    </Details> 
                </Square>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Leishmaniose;