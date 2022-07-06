import React from "react";

import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	Square,
	Details,
} from "./styles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import { StyledHr } from "../../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../../components/service-description";
import AdminListCard from "../../../../components/card-list-admin";
import Footer from "../../../../components/footer";

const AdminDescarteSolidario = () => {
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_familias_carentes.png"
						titulo="Famílias Carentes"
						linkItems={[
							{
								id: 1,
								name: "Registro de Familias Carentes",
								link: "/admin/familias_carentes",
							},
							{
								id: 2,
								name: "Moradores de Rua",
								link: "/admin/moradores_rua",
							},
							{
								id: 3,
								name: "Moradores de Rua",
								link: "/admin/descarte_solidario",
							},
						]}
					/>
					<ContainerColumn>
						<h1> Descarte Solidário </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Lista com todos os descartes solidários informados no município:" />
					<Details>
						<AdminListCard
							source="/assets/img/familias_carentes.png"
							nome="[localização]"
							sobrenome="tipo: Roupas/Calçados"
							click="showDeleteConfirm"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/familias_carentes.png"
							nome="[localização]"
							sobrenome="tipo: Eletrodomésticos"
							click="showDeleteConfirm"
                            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/familias_carentes.png"
							nome="[localização]"
							sobrenome="tipo: Móveis"
							click="showDeleteConfirm"
                            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/familias_carentes.png"
							nome="[localização]"
							sobrenome="tipo: outros"
							click="showDeleteConfirm"
                            descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
					</Details>
				</Square>
				<Footer />
			</ContainerBase>
		</>
	);
};
export default AdminDescarteSolidario;