import React, { useState } from "react";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import ListCard from "../../../components/card-list";
import GrayLine from "../../../components/styled-components/gray-line";
import Footer from "../../../components/footer";
import { ContainerRow, Line, TopButton } from "./styles";
import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../components/styled-components/PageStyles";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { StyledHr } from "../../../components/styled-components/StyledHr";

const Noticias = () => {
	const [noticias, setNoticias] = useState([]);
	const [isFavorite, setIsFavorite] = useState(false);
	const handleFavorite = () => {
		setIsFavorite(!isFavorite);
		console.log("você favoritou este serviço");
	};
	return (
		<ContainerBase>
			<Header />
			<ContentContainer style = {{height: "750vh"}}>
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
                            {
                                id: 2,
                                name: "Sugestões e/ou Reclamações",
                                link: "/sugestoes",
                            },
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4" id = "inicio">
								Notícias da Cidade
							</Typography>
						</div>
						<DescriptionText>
							Veja as mais recentes notícias da sua cidade!
						</DescriptionText>
					</div>
					{isFavorite ? (
						<span>
							<AiFillStar
								style={{
									cursor: "pointer",
									margin: ".8rem",
									stroke: "black",
									strokeWidth: "5",
								}}
								color={"yellow"}
								size={25}
								onClick={() => handleFavorite()}
							/>
						</span>
					) : (
						<AiOutlineStar
							style={{
								cursor: "pointer",
								margin: ".8rem",
								stroke: "black",
								strokeWidth: "5",
							}}
							size={25}
							onClick={() => handleFavorite()}
						/>
					)}
					<StyledHr />
                    <ContainerRow>
                        <a href = "#governo"> Governo </a>
                        <span> • </span>
                        <a href = "#entretenimento"> Entretenimento </a>
                        <span> • </span>
                        <a href = "#saude"> Saúde </a>
                        <span> • </span>
                        <a href = "#tecnologia"> Tecnologia </a>
                        <span> • </span>
                        <a href = "#pessoas"> Pessoas </a>
                        <span> • </span>
                        <a href = "#meio-ambiente"> Meio-Ambiente </a>
                    </ContainerRow>
                    <TopButton> <a href = "#inicio"> voltar ao topo </a> </TopButton>
				</TopContentContainer>
				<MidContentContainer id = "governo" style = {{height: "100vh", marginBottom: "17.5vh", overflowY: "auto", justifyContent: "flex-start", flexWrap: "nowrap"}}>
					<Typography variant = "h4"> Governo </Typography>
                    <ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
				</MidContentContainer>
                <Line />
                <MidContentContainer id = "entretenimento" style = {{height: "100vh", marginBottom: "17.5vh", overflowY: "auto", justifyContent: "flex-start", flexWrap: "nowrap"}}>
                    <Typography variant = "h4"> Entretenimento </Typography>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
				</MidContentContainer>
                <Line />
                <MidContentContainer id = "saude" style = {{height: "100vh", marginBottom: "17.5vh", overflowY: "auto", justifyContent: "flex-start", flexWrap: "nowrap"}}>
                    <Typography variant = "h4"> Saúde </Typography>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
				</MidContentContainer>
                <Line />
                <MidContentContainer id = "tecnologia" style = {{height: "100vh", marginBottom: "17.5vh", overflowY: "auto", justifyContent: "flex-start", flexWrap: "nowrap"}}>
                    <Typography variant = "h4"> Tecnologia </Typography>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
				</MidContentContainer>
                <Line />
                <MidContentContainer id = "pessoas" style = {{height: "100vh", marginBottom: "17.5vh", overflowY: "auto", justifyContent: "flex-start", flexWrap: "nowrap"}}>
                    <Typography variant = "h4"> Pessoas </Typography>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
				</MidContentContainer>
                <Line />
                <MidContentContainer id = "meio-ambiente" style = {{height: "100vh", marginBottom: "17.5vh", overflowY: "auto", justifyContent: "flex-start", flexWrap: "nowrap"}}>
                    <Typography variant = "h4"> Meio-Ambiente </Typography>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
					<ListCard
						source="/assets/img/home_notificacao_comunicacao.png"
						nome="[Título da Notícia]"
						sobrenome="[data de publicação]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
					/>
				</MidContentContainer>
			</ContentContainer>
            <GrayLine />
			<Footer />
		</ContainerBase>
	);
};
export default Noticias;