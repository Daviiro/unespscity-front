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
import MiniCard from "../../../../components/mini-card";
import { StyledHr } from "../../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../../components/service-description";
import Footer from "../../../../components/footer";
import Input from "../../../../components/input";
import DescriptionInput from "../../../../components/description-input";
import InputPhotos from "../../../../components/images-input";
import Button from "../../../../components/styled-components/form-button";
import AdminListCard from "../../../../components/card-list-admin";
import AdminServiceDescription from "../../../../components/styled-components/admin-service-description";

const AdminNoticias = () => {
	const [name, setName] = useState("");
	const [cargo, setCargo] = useState("");
	const [description, setDescription] = useState("");

	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_notificacao_comunicacao.png"
						titulo="Notificação e Comunicação"
						linkItems={[
							{
                                id: 1,
                                name: "Notícias da Cidade",
                                link: "/noticias",
                            },
						]}
					/>
					<ContainerColumn>
						<h1> Notícias da Cidade </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Cadastre aqui uma nova notícia na plataforma!" />
					<Form>
						<Input
							onChange={(e) => setName(e.target.value)}
							title="Notícia:"
						/>
						<Input
							onChange={(e) => setCargo(e.target.value)}
							title="Data:"
						/>
                        <div> <input type = "checkbox" id = "governo" name = "governo" /> <label for = "governo"> Governo </label> </div>
                        <div> <input type = "checkbox" id = "entretenimento" name = "entretenimento" /> <label for = "entretenimento"> Entretenimento </label> </div>
                        <div> <input type = "checkbox" id = "saude" name = "saude" /> <label for = "saude"> Saúde </label> </div>
                        <div> <input type = "checkbox" id = "tecnologia" name = "tecnologia" /> <label for = "tecnologia"> Tecnologia </label> </div>
                        <div> <input type = "checkbox" id = "pessoas" name = "pessoas" /> <label for = "pessoas"> Pessoas </label> </div>
                        <div> <input type = "checkbox" id = "meio-ambiente" name = "meio-ambiente" /> <label for = "meio-ambiente"> Meio-Ambiente </label> </div>
						<DescriptionInput
							placeholder="Descrição (em detalhes da notícia)."
							onChange={(e) => setDescription(e.target.value)}
						/>
						<InputPhotos />
						<Button text="Enviar" onClick />
					</Form>
					<AdminServiceDescription description="Aqui está a lista de todos as notícias cadastradas até o momento." />
					<h1> Governo: </h1>
                    <Details>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
					</Details>
                    <h1 style = {{ marginTop: "15vh" }}> Entretenimento: </h1>
                    <Details>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
					</Details>
                    <h1 style = {{ marginTop: "15vh" }}> Saúde: </h1>
                    <Details>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
					</Details>
                    <h1 style = {{ marginTop: "15vh" }}> Tecnologia: </h1>
                    <Details>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
					</Details>
                    <h1 style = {{ marginTop: "15vh" }}> Pessoas: </h1>
                    <Details>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
					</Details>
                    <h1 style = {{ marginTop: "15vh" }}> Meio-Ambiente: </h1>
                    <Details>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
							report={true}
						/>
						<AdminListCard
							source="/assets/img/home_notificacao_comunicacao.png"
							nome="[Título da Notícia]"
							sobrenome="[data de publicação]"
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
export default AdminNoticias;