import React from "react";

import { ContainerBase, Details, SubHeader, ContainerColumn, Square } from "./styles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import Line from "../../../../components/line";
import ServiceDescription from "../../../../components/service-description";
import ListCard from "../../../../components/list-card";
import Footer from "../../../../components/footer";

const AdminTelefones = () => {
    return (
        <>
            <ContainerBase>
                <Header/>
                <SubHeader>
                    <MiniCard
                        source = "/assets/img/home_assistencia_social.png"
                        titulo = "Assistência Social"
                    />
                    <ContainerColumn>
                        <h1> Telefones Úteis </h1>
                        <Line />
                    </ContainerColumn>
                </SubHeader>
                <Square>
                    <ServiceDescription 
                        description = "Confira a listagem de telefones úteis ao cidadão, como os números de secretarias, edifícios públicos (como hospitais), linhas de apoio ao cidadão, entre muitas outros:"
                    />
                    <Details>
                        <ListCard
                            source = "/assets/img/home_assistencia_social.png"
                            nome = "[Número] - Nome"
                            descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
                        />
                        <ListCard
                            source = "/assets/img/home_assistencia_social.png"
                            nome = "[Número] - Nome"
                            descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
                        />
                    </Details>
                </Square>
                <Footer/>
            </ContainerBase>
        </>
    )
};
export default AdminTelefones;