import { useEffect, useState } from "react";
import Header from "../../../components/header";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../components/styled-components/PageStyles";
import MiniCard from "../../../components/mini-card";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Typography from "@mui/material/Typography";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import Footer from "../../../components/footer";
import Favorites from "../../../components/favorites";
import CardOffer from "../../../components/card-offer";
import OfferModal from "./modal";
import { Button } from "@mui/material";
import { api } from "../../../services/api";

//id deste servico vai ser 52
const LocalTradeOffers = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 52 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 52,
				name: "Comércio Local",
				img: "/assets/img/home_assossiacao_comercial.png",
				link: "/comercio-local",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 52,
				name: "Comércio Local",
				img: "/assets/img/home_assossiacao_comercial.png",
				link: "/comercio-local",
			}); //se desfavoritou o servico
		}
		setIsFavorite(!isFavorite);
	};

	const [ofertas, setOfertas] = useState([]);
	//carregar os dados do backend
	const fetchData = async () => {
		const data = JSON.parse(localStorage.getItem("locationLocalStorage"));
		try {
			await api
				.get("/offers", {
					params: {
						cityid: data.city,
					},
				})
				.then((res) => {
					setOfertas(res.data);
				});
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	const mockupData = [
		{
			id: 1,
			cityID: 999,
			img: "",
			title: "Smart TV LG 50 pol 4K",
			price: 2186,
			store: "Loja do Sao Joaquim",
			street: "Rua Caramelo",
			streetNumber: 43224,
			description: "Eh uma Tv grande e bonita",
			latitude: 2423,
			longitude: 9229,
			date: Date,
		},
		{
			id: 2,
			cityID: 999,
			img: "",
			title: "Ar condicionado Philco",
			price: 1599,
			store: "Loja do Sao Joaquim",
			street: "Rua Caramelo",
			streetNumber: 43224,
			description: "Eh puta ar",
			latitude: 2423,
			longitude: 9229,
			date: Date,
		},
	];

	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	const HandleAddOffer = (offer) => {
		//addiciono no back a oferta e fecho
		try {
			api.post("/offers", {
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
					Accept: "Token",
					"Access-Control-Allow-Origin": "*",
				},
				data: {
					cityid: offer.cityid,
					title: offer.title,
					price: offer.price,
					store: offer.store,
					street: offer.street,
					streetNumber: offer.streetNumber,
					latitude: 777,
					longitude: 999,
					description: offer.description,
					img: "offer.img",
				},
			});
		} catch (e) {
			console.log(e);
		}
		setOpen(false);
	};

	/**
 * cityID: formValues.city,
							img: "",
							title: title,
							store: store,
							price: price,
							street: street,
							streetNumber: streetNumber,
							description: description,
 */

	return (
		<ContainerBase>
			<Header />
			<Favorites data={props.data} />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_assossiacao_comercial.png"
						titulo="Assossiação Comercial"
						linkItems={[
							{
								id: 1,
								name: "Comércio Local",
								link: "/comercio-local",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Comércio Local</Typography>
						</div>
						<DescriptionText>
							Neste serviço você poderá acessar as ofertas
							disponibilizadas pelo comércio local.
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
					<div onClick={handleClickOpen}>
						<Button variant="contained">Adicionar Oferta</Button>
					</div>
					<br />
					{mockupData.map((offer) => (
						<CardOffer
							img={offer.img}
							title={offer.title}
							price={offer.price}
							store={offer.store}
							street={offer.street}
							streetNumber={offer.streetNumber}
							description={offer.description}
							admin={false}
						/>
					))}

					<OfferModal
						open={open}
						handleClose={handleClose}
						handleAdd={HandleAddOffer}
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default LocalTradeOffers;
