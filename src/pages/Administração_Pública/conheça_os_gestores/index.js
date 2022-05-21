import React, { useState } from "react";

import { ContainerBase, SubHeader, ContainerColumn, Square, Details } from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Line from "../../../components/line";
import ServiceDescription from "../../../components/service-description";
import ListCard from "../../../components/list-card";
import Footer from "../../../components/footer";

const Gestores = () => {
    const [gestores, setGestores] = useState([]);

    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_administracao_publica.png"
                        titulo = "Administração Pública"
                    />
                    <ContainerColumn>
                        <h1> Conheça os Gestores </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <ServiceDescription 
                        description = "Conheça os atuais gestores que trabalham diariamente servindo às necessidades da sua grande cidade!"
                    />
                    <Details>
                        <ListCard
                            source = "/assets/img/home_administracao_publica.png"
                            nome = "Nome e Sobrenome"
                            sobrenome = "Cargo"
                            descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
                        />
                        <ListCard
                            source = "/assets/img/home_administracao_publica.png"
                            nome = "Nome e Sobrenome"
                            sobrenome = "Cargo"
                            descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
                        />
                    </Details> 
                </Square>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default Gestores;