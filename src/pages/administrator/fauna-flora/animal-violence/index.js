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

const AdminMausTratosAnimais = () => {
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_fauna_flora.png"
						titulo="Fauna e Flora"
						linkItems={[
							{
								id: 1,
								name: "Fiscalização de Animais Silvestres",
								link: "/admin/animais_silvestres",
							},
							{
								id: 2,
								name: "Maus tratos à Animais",
								link: "/admin/maus_tratos",
							},
						]}
					/>
					<ContainerColumn>
						<h1> Maus tratos à Animais </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Lista com todas as denúncias de maus tratos à animais silvestres e domésticos." />
					<Details>
                    <AdminListCard
							source="/assets/img/home_fauna_flora.png"
							nome="Animal Silvestre"
							sobrenome="[localização]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
						<AdminListCard
							source="/assets/img/home_fauna_flora.png"
							nome="Animal Doméstico"
							sobrenome="[localização]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
						<AdminListCard
							source="/assets/img/home_fauna_flora.png"
							nome="Animal Silvestre"
							sobrenome="[localização]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
						<AdminListCard
							source="/assets/img/home_fauna_flora.png"
							nome="Animal Doméstico"
							sobrenome="[localização]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
					</Details>
				</Square>
				<Footer />
			</ContainerBase>
		</>
	);
};
export default AdminMausTratosAnimais;
