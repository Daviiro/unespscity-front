import React, { useState } from "react";
import UsefulLocationsMap from "../../pages/social-care/useful-locations/map";
import UsefulLocationsModal from "../../pages/social-care/useful-locations/modal";
import { ContainerBase } from "./styles";

const MapPageUsefulLocations = () => {
    const [locations, setLocations] = useState([
		{
			id: 1,
			name: "Prefeitura Municipal de Presidente Prudente",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)3902-4400",
			opening_hours: "Segunda à Sexta, das 08:00 às 17:00",
			location: {
				lat: -22.1218172,
				lng: -51.3881661,
			},
		},
		{
			id: 2,
			name: "Hospital Regional (HR)",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)3229-1500",
			opening_hours: "Aberto 24 horas",
			location: {
				lat: -22.1323390,
				lng: -51.4073447,
			},
		},
		{
			id: 3,
			name: "Prudenshopping",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)2101-9700",
			opening_hours: "Todos os dias das 10:00 às 22:00",
			location: {
				lat: -22.1158252,
				lng: -51.4071100,
			},
		},
		{
			id: 4,
			name: "Centro",
			imgsrc: "/assets/img/default-location.png",
			phone: "(telefones variados)",
			opening_hours: "Segunda a sábado, das 07:00 as 19:00",
			location: {
				lat: -22.1241906,
				lng: -51.3858354,
			},
		},
		{
			id: 5,
			name: "Câmara Municipal de Presidente Prudente",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)2104-4300",
			opening_hours: "Segunda à Sexta, das 08:00 às 17:00",
			location: {
				lat: -22.1204230,
				lng: -51.3870140,
			},
		},
		{
			id: 6,
			name: "Cidade da Criança",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)3902-9233",
			opening_hours: "Sexta à Domingo, das 10:00 às 16:00",
			location: {
				lat: -22.1833458,
				lng: -51.3853208,
			},
		},
		{
			id: 7,
			name: "Parque do Povo",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)3902-9340",
			opening_hours: "Aberto 24 horas",
			location: {
				lat: -22.1281034,
				lng: -51.4002568,
			},
		},
		{
			id: 8,
			name: "Centro Histórico Cultural Matarazzo",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)3226-3399",
			opening_hours: "Domingo das 10:00 às 22:00, segunda à sábado das 08:30 às 22:00",
			location: {
				lat: -22.1206503,
				lng: -51.3793409,
			},
		},
		{
			id: 9,
			name: "Balneário da Amizade",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)99742-7655",
			opening_hours: "Das 07:00 às 19:00 todos os dias",
			location: {
				lat: -22.1057482,
				lng: -51.4432070,
			},
		},
		{
			id: 10,
			name: "Museu e Arquivo Histórico Municipal",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)3223-9404",
			opening_hours: "Terça à sexta, das 08:30 às 16:30",
			location: {
				lat: -22.1163284,
				lng: -51.4115662,
			},
		},
		{
			id: 11,
			name: "Catedral de São Sebastião",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)3223-2016",
			opening_hours: "Todos os dias, das 07:00 às 10:00",
			location: {
				lat: -22.1225433,
				lng: -51.3886604,
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
	const handleAdd = (Location) => {
		setLocations([...locations, Location]); //adiciono a nova localização no array
		setOpen(false);
	};

	const [clickedCoordinates, setClickedCoordinates] = useState({
		lat: 0,
		lng: 0,
	});

	const onMapClick = (coords) => {
		setClickedCoordinates(coords);
		handleClickOpen();
	};

    return (
        <>
            <ContainerBase>
                <UsefulLocationsMap
					locations={locations}
					icon="/assets/img/location-icon.png"
					onMapClick={onMapClick}
				/>
				<UsefulLocationsModal
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

export default MapPageUsefulLocations;