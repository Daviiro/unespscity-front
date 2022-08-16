import React, { useState, useEffect } from "react";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import ListCard from "../../../components/card-list";
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
import Favorites from "../../../components/favorites";
import { api } from "../../../services/api";

const Telefones = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		async function getContacts() {
			try {
				const { data } = await api.get('/useful_contacts', {
					idCity: 1
				});
				setContacts(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getContacts();
	}, []);

	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 34 && setIsFavorite(true)
		);
	}, []);

	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 34,
				name: "Telefones Úteis",
				img: "/assets/img/home_assistencia_social.png",
				link: "/telefones_uteis",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 34,
				name: "Telefones Úteis",
				img: "/assets/img/home_assistencia_social.png",
				link: "/telefones_uteis",
			}); //se desfavoritou o servico
		}
		setIsFavorite(!isFavorite);
	};
	console.log(contacts)
	return (
		<ContainerBase>
			<Header />
			<Favorites data={props.data} />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_assistencia_social.png"
						titulo="Assistência Social"
						linkItems={[
							{
								id: 1,
								name: "Locais Úteis",
								link: "/locais_uteis",
							},
							{
								id: 2,
								name: "Telefones Úteis",
								link: "/telefones_uteis",
							},
							{
								id: 3,
								name: "Programação Cultural",
								link: "/programacao_cultural",
							},
							{
								id: 4,
								name: "Cadastro de Túmulos e Falecidos",
								link: "/tumulos",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Telefones Úteis
							</Typography>
						</div>
						<DescriptionText>
							Confira a listagem de telefones úteis ao cidadão,
							como os números de secretarias, edifícios públicos
							(como hospitais), linhas de apoio ao cidadão, entre
							muitas outros:
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
					{
						contacts.map((contact) =>
							<ListCard
								source={contact.images}
								nome={contact.name}
								sobrenome={contact.phoneNumber}
								descricao={contact.description}
							/>
						)
					}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default Telefones;
