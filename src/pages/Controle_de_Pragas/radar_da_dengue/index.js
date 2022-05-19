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

const Dengue = () => {
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
                        <h1> Radar da Dengue </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <ServiceDescription 
                        description = "Utilize este serviço para informar a localização de focos do mosquito transmissor da Dengue, o pernilongo-rajado (Aedes aegypti)."
                    />
                    <Details>
                        <a style = {{textDecoration: "none"}} target = "_blank" href = "https://www.google.com.br/search?q=aedes+aegypti&hl=pt-BR&tbm=isch&source=hp&biw=1496&bih=723&ei=iTmGYrWrF6-G5OUPuI-OuAs&iflsig=AJiK0e8AAAAAYoZHmWnZNcrsQDAjrtAqUIf5D7XKHlYE&oq=aedes+&gs_lcp=CgNpbWcQAxgAMggIABCABBCxAzILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoICAAQsQMQgwFQAFjHCGChEmgAcAB4AIABqwGIAZYGkgEDMS41mAEAoAEBqgELZ3dzLXdpei1pbWc&sclient=img">
                            <MiniCard
                                    source = "/assets/img/Radar_da_Dengue.png"
                                    titulo = "Aedes aegypti"
                                />
                        </a>
                        <InputAddressContainer>
                            <Input title="Endereço:" width="36vw"/>
                            <Input title="Nº" width="7vw"/>
                        </InputAddressContainer>
                        <Input title="Ponto de Referência:" placeholder="Opcional"/>
                        <DescriptionInput placeholder = "Conte-nos em detalhes sobre o problema encontrado." />
                        <Button text="Enviar"/>
                    </Details> 
                </Square>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Dengue;