import React, { useState } from "react";
import {
	ContainerBase,
	Details,
	SubHeader,
	ContainerColumn,
	Square,
	Form,
} from "./styles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/MiniCard";
import Line from "../../../../components/StyledComponents/line";
import ServiceDescription from "../../../../components/ServiceDescription";
import Footer from "../../../../components/footer";
import Input from "../../../../components/input";
import DescriptionInput from "../../../../components/DescriptionInput";
import InputPhotos from "../../../../components/ImagesInput";
import Button from "../../../../components/StyledComponents/form-button";
import AdminListCard from "../../../../components/AdminListCard";
import AdminServiceDescription from "../../../../components/StyledComponents/admin-service-description";

const AdminGestores = () => {
	const [name, setName] = useState("");
	const [cargo, setCargo] = useState("");
	const [description, setDescription] = useState("");

	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_administracao_publica.png"
						titulo="Administração Pública"
					/>
					<ContainerColumn>
						<h1> Conheça os Gestores </h1>
						<Line />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Cadastre aqui todas as informações do Gestor para que fique disponível à população!" />
					<Form>
						<Input
							onChange={(e) => setName(e.target.value)}
							title="Nome do Gestor:"
						/>
						<Input
							onChange={(e) => setCargo(e.target.value)}
							title="Cargo:"
						/>
						<DescriptionInput
							title="Descrição:"
							placeholder="Nos conte em detalhes sobre o Gestor e seu Cargo."
							onChange={(e) => setDescription(e.target.value)}
						/>
						<InputPhotos />
						<Button text="Enviar" onClick />
					</Form>
					<AdminServiceDescription description="Aqui está a lista de todos os gestores cadastrados até o momento." />
					<Details>
						<AdminListCard
							source="/assets/img/home_administracao_publica.png"
							nome="Nome e Sobrenome"
							sobrenome="Cargo"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/home_administracao_publica.png"
							nome="Nome e Sobrenome"
							sobrenome="Cargo"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/home_administracao_publica.png"
							nome="Nome e Sobrenome"
							sobrenome="Cargo"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/home_administracao_publica.png"
							nome="Nome e Sobrenome"
							sobrenome="Cargo"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/home_administracao_publica.png"
							nome="Nome e Sobrenome"
							sobrenome="Cargo"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/home_administracao_publica.png"
							nome="Nome e Sobrenome"
							sobrenome="Cargo"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/home_administracao_publica.png"
							nome="Nome e Sobrenome"
							sobrenome="Cargo"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
					</Details>
				</Square>
				<Footer />
			</ContainerBase>
		</>
	);
};
export default AdminGestores;
