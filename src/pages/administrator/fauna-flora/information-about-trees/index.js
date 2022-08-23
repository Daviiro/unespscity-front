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
import TreesModal from "../../../fauna-flora/information-about-trees/modal";
import TreesMap from "./map";
import Footer from "../../../../components/footer";
import LocalContext from "../../../user-location/Context";
import { api } from "../../../../services/api";
import { Context } from "../../../../context/Auth/AuthContext";

const AdminInformationAboutTrees = () => {
	const { user } = useContext(Context);
	const [isLoading, setLoading] = useState(true);
	const [clickedCoordinates, setClickedCoordinates] = useState({
		lat: 0,
		lng: 0,
	});
	const [formValues, setFormValues] = useContext(LocalContext);

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

	const handleGet = async () => {
		const data = JSON.parse(localStorage.getItem("locationLocalStorage"));
		//console.log(formValues.city);

		try {
			await api
				.get("/informationabouttrees/cityid", {
					headers: {
						"Content-Type": "application/json; charset=UTF-8",
						Accept: "Token",
						"Access-Control-Allow-Origin": "*",
						Authorization: "*",
					},
					params: {
						cityid: data.city,
					},
				})
				.then((res) => {
					setLocations(res.data);

					console.log(res.data);
					setLoading(false);
				});
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		handleGet();
	}, []);

	const handleAdd = (tree) => {
		//console.log(locations);
		//console.log(tree);
		setLocations([...locations, tree]); //adiciono a nova arvore no array
		//console.log(locations);
		setOpen(false);
		console.log(
			"Arvore: " +
				tree.name +
				" Cidade: " +
				tree.cityid +
				" img: " +
				tree.imgsrc +
				" specie: " +
				tree.specie +
				" idade: " +
				tree.age +
				"location: " +
				tree.location
		);

		let uid = user.userId;
		if (uid === undefined) {
			uid = -1;
		}

		let age = tree.age;
		if (age <= 0 || age === undefined) {
			age = 1;
		}
		let specie = tree.specie;
		if (specie === "") {
			specie = "Náo identificadda";
		}
		let name = tree.name;
		if (name === "") {
			name = "Não identificadda";
		}
		api.post("/informationabouttrees", {
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				Accept: "Token",
				"Access-Control-Allow-Origin": "*",
				Authorization: "*",
			},
			data: {
				cityid: tree.cityid,
				userid: uid,
				name: name,
				imgsrc: tree.imgsrc,
				specie: specie,
				age: age,
				location: tree.location,
			},
		});
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
			handleGet();
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
						source="/assets/img/home_fauna_flora.png"
						titulo="Fauna e Flora"
						linkItems={[
							{
								id: 1,
								name: "Fiscalização de Animais Silvestres",
								link: "/admin/animais_silvestres",
							},
							{
								id: 2,
								name: "Maus tratos à Animais",
								link: "/admin/maus_tratos",
							},
							{
								id: 3,
								name: "Árvores",
								link: "/admin/arvores",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Árvores</Typography>
						</div>
						<DescriptionText>
							Aqui, você administrador, pode adicionar novas
							árvores, além de também poder deletar árvores que
							foram adicionadas por você ou por algum usuário.
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					{/*<AdminListCard
						source="/assets/img/home_fauna_flora.png"
						nome="Árvore da espécie pau-brasil"
						sobrenome="[localização]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						report={true}
					/>*/}
					<TreesMap
						locations={locations}
						icon="/assets/img/tree-default-icon.png"
						onMapClick={onMapClick}
						handleDelete={handleDelete}
					/>
					<TreesModal
						locations={locations}
						open={open}
						clickedCoordinates={clickedCoordinates}
						handleClose={handleClose}
						handleAdd={handleAdd}
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AdminInformationAboutTrees;
