import React from "react";

import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	InputAddressContainer,
	Square,
	Details,
} from "./styles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import { StyledHr } from "../../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../../components/service-description";
import footer from "../../../../components/footer";
import AdminListCard from "../../../../components/card-list-admin";

const AdminVias = () => {
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_conservacao_urbana.png"
						titulo="Conservação Urbana"
					/>
					<ContainerColumn>
						<h1> Vias Públicas </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Lista com todas as vias publicas em situações ruins relatadas pelos usuarios." />
					<Details>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome="Nome"
							sobrenome="Telefone"
							click="showDeleteConfirm"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
					</Details>
				</Square>
				<footer />
			</ContainerBase>
		</>
	);
};
export default AdminVias;
