import React from 'react';

import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	Square,
	Details,
} from "../../public-administration/know-city-managers/styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../components/service-description";
import ListCard from "./card-list";
import Footer from "../../../components/footer";

const AdoptionAnimals = () => {
    return (
        <>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source = "/assets/img/home_animais_domesticos.png"
						titulo = "Animais Domésticos"
						linkItems={[
							{
								id: 1,
								name: "Animais Abandonados",
								link: "/animais_abandonados",
							},
							{
								id: 2,
								name: "Animais Perdidos",
								link: "/animais_perdidos_opcoes",
							},
							{
								id: 3,
								name: "Maus tratos à Animais",
								link: "/maus_tratos",
							},
							{
								id: 4,
								name: "Animais Sinantrópicos",
								link: "/animais-sinantropicos",
							},
                            {
								id: 5,
								name: "Adoção de Animais",
								link: "/adocao_animais",
							},
						]}
					/>
					<ContainerColumn>
						<h1> Adoção de Animais </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description = "Aqui você pode checar a lista de animais disponíveis para a adoção." />
					<Details>
					<ListCard
							source = "/assets/img/home_animais_domesticos.png"
							nome = "[última vez visto]"
							sobrenome = "[último local visto]"
							descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							button = "Falar com o dono"
						/>
						<ListCard
							source = "/assets/img/home_animais_domesticos.png"
							nome = "[última vez visto]"
							sobrenome = "[último local visto]"
							descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							button = "Falar com o dono"
						/>
						<ListCard
							source = "/assets/img/home_animais_domesticos.png"
							nome = "[última vez visto]"
							sobrenome = "[último local visto]"
							descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							button = "Falar com o dono"
						/>
						<ListCard
							source = "/assets/img/home_animais_domesticos.png"
							nome = "[última vez visto]"
							sobrenome = "[último local visto]"
							descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							button = "Falar com o dono"
						/>
						<ListCard
							source = "/assets/img/home_animais_domesticos.png"
							nome = "[última vez visto]"
							sobrenome = "[último local visto]"
							descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							button = "Falar com o dono"
						/>
						<ListCard
							source = "/assets/img/home_animais_domesticos.png"
							nome = "[última vez visto]"
							sobrenome = "[último local visto]"
							descricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							button = "Falar com o dono"
						/>
					</Details>
				</Square>
				<Footer />
			</ContainerBase>
		</>
    )
}

export default AdoptionAnimals;