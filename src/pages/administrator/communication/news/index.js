import React, { useState } from "react";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	MidContentContainer,
	DescriptionText,
} from "../../../../components/styled-components/PageStyles";
import { Form, Details } from "./styles";
import AdminHeader from "../../../../components/header/admin";
import MiniCard from "../../../../components/mini-card";
import Footer from "../../../../components/footer";
import Input from "../../../../components/input";
import DescriptionInput from "../../../../components/description-input";
import InputPhotos from "../../../../components/images-input";
import Button from "../../../../components/styled-components/form-button";
import AdminListCard from "../../../../components/card-list-admin";
import AdminServiceDescription from "../../../../components/styled-components/admin-service-description";
import { Typography } from "@mui/material";

const AdminNoticias = () => {
	const [name, setName] = useState("");
	const [cargo, setCargo] = useState("");
	const [description, setDescription] = useState("");

	return (
		<ContainerBase>
			<AdminHeader />
				<ContentContainer>
					<TopContentContainer>
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
						<div style={{ marginTop: "14px" }}>
							<div style={{ textAlign: "center" }}>
								<Typography variant="h4">
									Notícias da Cidade
								</Typography>
							</div>
							<DescriptionText>
								Cadastre aqui uma nova notícia na plataforma!
							</DescriptionText>
						</div>
						<div></div>
					</TopContentContainer>
					<MidContentContainer>
						<Form>
							<Input
								onChange={(e) => setName(e.target.value)}
								title="Notícia:"
							/>
							<Input
								onChange={(e) => setCargo(e.target.value)}
								title="Data:"
							/>
                        	<div style={{ marginTop: "0.4vh" }}> <input type = "checkbox" id = "governo" name = "governo" /> <label for = "governo" style={{ fontSize: "15px" }}> Governo </label> </div>
                        	<div> <input type = "checkbox" id = "entretenimento" name = "entretenimento" /> <label for = "entretenimento" style={{ fontSize: "15px" }}> Entretenimento </label> </div>
                        	<div> <input type = "checkbox" id = "saude" name = "saude" /> <label for = "saude" style={{ fontSize: "15px" }}> Saúde </label> </div>
                        	<div> <input type = "checkbox" id = "tecnologia" name = "tecnologia" /> <label for = "tecnologia" style={{ fontSize: "15px" }}> Tecnologia </label> </div>
                        	<div> <input type = "checkbox" id = "pessoas" name = "pessoas" /> <label for = "pessoas" style={{ fontSize: "15px" }}> Pessoas </label> </div>
                        	<div style={{ marginBottom: "0.4vh" }}> <input type = "checkbox" id = "meio-ambiente" name = "meio-ambiente" /> <label for = "meio-ambiente" style={{ fontSize: "15px" }}> Meio-Ambiente </label> </div>
							<DescriptionInput
								placeholder="Descrição (em detalhes da notícia)."
								onChange={(e) => setDescription(e.target.value)}
							/>
							<InputPhotos />
							<Button text="Enviar" onClick />
						</Form>
						<div></div>
						<AdminServiceDescription description="Aqui está a lista de todos as notícias cadastradas até o momento." />
						<Typography variant = "h4"> Governo: </Typography>
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
                    	<Typography variant = "h4"> Entretenimento: </Typography>
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
                    	<Typography variant = "h4"> Saúde: </Typography>
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
                    	<Typography variant = "h4"> Tecnologia: </Typography>
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
                    	<Typography variant = "h4"> Pessoas: </Typography>
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
                    	<Typography variant = "h4"> Meio-Ambiente: </Typography>
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
					</MidContentContainer>
				</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminNoticias;