import React, { useState, useEffect, useContext } from "react";
import TreesMap from "../../pages/fauna-flora/information-about-trees/map";
import TreesModal from "../../pages/fauna-flora/information-about-trees/modal";
import { Context } from "../../context/Auth/AuthContext";
import { api } from "../../services/api";
import { ContainerBase } from "./styles";

const MapPageArvores = () => {
	const { user } = useContext(Context);
	const [isLoading, setLoading] = useState(true);
	const [locations, setLocations] = useState([
		{
			_id: 1,
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
			_id: 2,
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
			_id: 3,
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
			_id: 4,
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
			_id: 5,
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
	const handleAdd = (tree) => {
		setLocations([...locations, tree]);
		setOpen(false);
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
			specie = "Não identificadda";
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
				name: tree.name,
				imgsrc: tree.imgsrc,
				specie: specie,
				age: age,
				location: tree.location,
			},
		})
			.then((response) => console.log(response))
			.catch((e) => {
				console.log(e);
			});
	};

	const [clickedCoordinates, setClickedCoordinates] = useState({
		lat: 0,
		lng: 0,
	});

	const onMapClick = (coords) => {
		setClickedCoordinates(coords);
		handleClickOpen();
	};

	const handleGet = async () => {
		const data = JSON.parse(localStorage.getItem("locationLocalStorage"));
		try {
			await api
				.get("/informationabouttrees/cityid", {
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

	if (isLoading) {
		return <div>Loading...</div>;
	}

    return (
        <>
            <ContainerBase>
				<TreesMap
					locations={locations}
					icon="/assets/img/tree-default-icon.png"
					onMapClick={onMapClick}
				/>
				<TreesModal
					locations={locations}
					open={open}
					clickedCoordinates={clickedCoordinates}
					handleClose={handleClose}
					handleAdd={handleAdd}
				/>
            </ContainerBase>
        </>
    );
};

export default MapPageArvores;