import { useState, useEffect } from "react";
import AdminHeader from "../../../../components/header/admin";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";
import MiniCard from "../../../../components/mini-card";
import Typography from "@mui/material/Typography";
import { StyledHr } from "../../../../components/styled-components/StyledHr";
import Footer from "../../../../components/footer";
import CardOffer from "../../../../components/card-offer";
import { api } from "../../../../services/api";

const AdminLocalTradeOffers = () => {
	const [isLoading, setLoading] = useState(true);
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
			description: "Eh um ótimo ar-condicionado",
			latitude: 2423,
			longitude: 9229,
			date: Date,
		},
	];

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
					setLoading(false);
				});
		} catch (e) {
			console.log(e);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	const HandleDelOffer = async (id) => {
		api.delete("/offers", {
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				Accept: "Token",
				"Access-Control-Allow-Origin": "*",
				Authorization: "*",
			},
			params: {
				id: id,
			},
		}).then((res) => {
			console.log("Oferta excluida com sucesso: ", res.data);
			fetchData();
		});
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<ContainerBase>
			<AdminHeader />
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
						<div></div>
					</div>

					<StyledHr />
				</TopContentContainer>
				<MidContentContainer>
					{ofertas.map((offer) => (
						<CardOffer
							img={offer.img}
							title={offer.title}
							price={offer.price}
							store={offer.store}
							street={offer.street}
							streetNumber={offer.streetNumber}
							description={offer.description}
							id={offer._id}
							admin={true}
							HandleDelOffer={HandleDelOffer}
						/>
					))}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AdminLocalTradeOffers;
