import React, { useState, useEffect } from "react";
// import { api } from "../../../services/api";
import PagesPieChart from "../../../charts/types/donut";
import { InputAddressContainer, Details } from "./styles";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Favorites from "../../../components/favorites";
import GrayLine from "../../../components/styled-components/gray-line";
import { ChartContainer } from "../../../charts/types/donut/chart";
import Footer from "../../../components/footer";
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
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";

const MausTratosAnimais = (props) => {
/*	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/maus_tratos_animais');
				setProblems(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, []);	*/

	const totalSolicitados = 5;
	const totalResolvidos = 8;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 24 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 24,
				name: "Maus tratos à Animais",
				img: "assets/img/home_animais_domesticos.png",
				link: "/maus_tratos",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 24,
				name: "Maus tratos à Animais",
				img: "assets/img/home_animais_domesticos.png",
				link: "/maus_tratos",
			}); //se desfavoritou o servico
		}
		setIsFavorite(!isFavorite);
	};
	return (
		<ContainerBase>
			<Header />
			<Favorites data={props.data} />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_fauna_flora.png"
						titulo="Fauna e Flora"
						linkItems={[
							{
								id: 1,
								name: "Fiscalização de Animais Silvestres",
								link: "/animais_silvestres",
							},
							{
								id: 2,
								name: "Maus tratos à Animais",
								link: "/maus_tratos",
							},
							{
								id: 3,
								name: "Árvores",
								link: "/arvores",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Maus tratos à Animais
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para denunciar a prática de
							maus tratos à animais silvestres ou domésticos.
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
				</TopContentContainer>
				<MidContentContainer>
					{/*
					<Details>
						<InputLocalization />
						<p>OU</p>
						<InputAddressContainer>
							<Input title="Endereço:" width="36vw" />
							<Input title="Nº" width="7vw" />
						</InputAddressContainer>
						<Input
							title="Ponto de Referência:"
							placeholder="Opcional"
						/>
						<div>
							<input
								type="checkbox"
								id="Maus tratos à Animais Silvestres"
							/>
							<label
								for="Maus tratos à Animais Silvestres"
								style={{ fontSize: "14px" }}
							>
								{" "}
								Maus tratos à Animais Silvestres{" "}
							</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="Maus tratos à Animais Domésticos"
							/>
							<label
								for="Maus tratos à Animais Domésticos"
								style={{ fontSize: "14px" }}
							>
								{" "}
								Maus tratos à Animais Domésticos{" "}
							</label>
						</div>
						<DescriptionInput placeholder="Conte-nos em detalhes sobre o problema encontrado, descrevendo o animal também, se possível. Nos ajudará a acionar o serviço ideal para resolver o problema." />
						<InputPhotos />
						<Button text="Enviar" />
					</Details>*/}
					<ServiceOrderInformation
						srcaddress="/animalviolence"
						descriptionHelperText="Conte-nos em detalhes sobre o problema encontrado, descrevendo o animal também, se possível. Nos ajudará a acionar o serviço ideal para resolver o problema."
					/>
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3> Serviços solicitados e serviços efetuados: </h3>
			{/*	{
					problems.map((problem) => (problem.type === "animal-violence") (
						<PagesPieChart
							solved={problem.totalResolvidos}
							unsolved={problem.totalSolicitados}
						/>
					))
				}	*/}
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalSolicitados}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};

export default MausTratosAnimais;
