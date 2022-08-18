import React, { useState, useEffect, useContext } from "react";
import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";
import MiniCard from "../../../../components/mini-card";
import AdminHeader from "../../../../components/header/admin";
import Footer from "../../../../components/footer";
import Map from "./map";
import { fetchCityForID } from "../../../../services/IBGE";
import { fetchLatLong } from "../../../../services/GoogleMaps";
import LocalContext from "../../../user-location/Context";

const AdminRefuseCollection = () => {
	const [center, setCenter] = useState({ lat: 0, lng: 0 });
	const [cityName, setCityName] = useState("");
	const [formValues, setFormValues] = useContext(LocalContext);
	fetchCityForID(formValues.city).then((city) => {
		setCityName(city);
	}); //API DO IBGE, SEM PROBLEMAS DE COBRANCA
	useEffect(() => {
		if (formValues.city !== undefined) {
			fetchCityForID(formValues.city).then((city) => {
				setCityName(city);
			}); //API DO IBGE, SEM PROBLEMAS DE COBRANCA
			if (cityName != "") {
				fetchLatLong(cityName).then((data) => {
					setCenter({
						lat: data.results[0].geometry.location.lat,
						lng: data.results[0].geometry.location.lng,
					});
				});
			} //DENTRO DESTE TEM A API DO GEOCODE, DE JEITO NENHUM CRIE UM LOOP NESTE USEEFFECT
		}
	}, [cityName]);
	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_meio_ambiente.png"
						titulo="Meio Ambiente"
						linkItems={[
							{
								id: 1,
								name: "Adoção de Áreas Públicas",
								link: "/admin/adocao_areas_publicas",
							},
							{
								id: 2,
								name: "Monitoramento do Tempo",
								link: "/admin/monitoramento",
							},
							{
								id: 3,
								name: "Coleta de Lixo",
								link: "/admin/coleta-de-lixo",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Coleta de Lixo</Typography>
						</div>
						<DescriptionText>
							Adicione as rotas dos caminhões de lixo assim como o
							tipo de lixo com qual o mesmo trabalha
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					<Map />
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AdminRefuseCollection;
