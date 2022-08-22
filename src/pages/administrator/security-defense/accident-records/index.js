import React, { useState, useContext, useEffect } from "react";
import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";
import AdminHeader from "../../../../components/header/admin";
import MiniCard from "../../../../components/mini-card";
import Footer from "../../../../components/footer";
import LocalContext from "../../../user-location/Context";
import TreesMap from "./map";
import { api } from "../../../../services/api";
import AdminListCard from "../../../../components/card-list-admin";

const AdminAccidentRecords = () => {
	const [problems, setProblems] = useState([]);
	const [refresh, setRefresh] = useState(0);
	const [clickedCoordinates, setClickedCoordinates] = useState({
		lat: 0,
		lng: 0,
	});
	const [formValues, setFormValues] = useContext(LocalContext);
	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get("/accidentrecords");
				setProblems(data);
			} catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, [refresh]);

	const [locations, setLocations] = useState([
		{
			id: 1,
			cityid: formValues.city,
			name: "Location 1",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Pata de Vaca",
			age: 50,
			location: {
				lat: 41.3954,
				lng: 2.162,
			},
		},
		{
			id: 2,
			cityid: formValues.city,
			name: "Location 2",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Sibipiruna",
			age: 50,
			location: {
				lat: 41.3917,
				lng: 2.1649,
			},
		},
		{
			id: 3,
			cityid: formValues.city,
			name: "Location 3",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Manacá da Serra",
			age: 50,
			location: {
				lat: 41.3773,
				lng: 2.1585,
			},
		},
		{
			id: 4,
			cityid: formValues.city,
			name: "Location 4",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Quaresmeira ",
			age: 50,
			location: {
				lat: 41.3797,
				lng: 2.1682,
			},
		},
		{
			id: 5,
			cityid: formValues.city,
			name: "Location 5",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Sibipiruna ",
			age: 50,
			location: {
				lat: -22.131951,
				lng: -51.40933,
			},
		},
	]);

	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const onMapClick = (coords) => {
		//console.log(open);
		setClickedCoordinates(coords);
		handleClickOpen();
	};

	const handleDelete = (id) => {
		api.delete("/informationabouttrees", {
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
			console.log("feira excluida com sucesso: ", res.data);
			//handleGet();
		});
	};

	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_seguranca_defesa_civil.png"
						titulo="Segurança e Defesa Civil"
						linkItems={[
							{
								id: 1,
								name: "Registro de Roubos e Furtos",
								link: "/admin/registro_roubos",
							},
							{
								id: 2,
								name: "Violência Doméstica",
								link: "/admin/violencia-domestica",
							},
							{
								id: 3,
								name: "Registro de Acidentes",
								link: "/admin/registro-acidentes",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Lista de acidentes registrados
							</Typography>
						</div>
						<DescriptionText>
							Aqui você pode ver e marcar como resolvido os
							acidentes que ocorreram na cidade.
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					{/*<TreesMap
						locations={locations}
						icon="/assets/img/tree-default-icon.png"
						onMapClick={onMapClick}
						handleDelete={handleDelete}
					/>*/}
					{problems.map((problem) => (
						<AdminListCard
							key={problem._id}
							source={problem.images}
							nome={problem.street}
							sobrenome={problem.referencePoint}
							descricao={problem.description}
							report={true}
							userId={problem.userId}
							url="solidarydisposal"
							id={problem._id}
							setRefresh={setRefresh}
						/>
					))}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AdminAccidentRecords;
