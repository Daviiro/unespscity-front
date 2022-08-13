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

const AdminLocalTradeOffers = () => {
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
					{mockupData.map((offer) => (
						<CardOffer
							img={offer.img}
							title={offer.title}
							price={offer.price}
							store={offer.store}
							street={offer.street}
							streetNumber={offer.streetNumber}
							description={offer.description}
							admin={true}
						/>
					))}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AdminLocalTradeOffers;
