import React, { useState } from "react";
import LeishmanioseMap from "../../pages/pest-control/leishmaniose/map";
import { ContainerBase } from "./styles";

const MapPageLeishmaniose = () => {
    
    const [locations, setLocations] = useState([
		{
			id: 1,
			name: "Clínica Veterinária São Francisco",
			imgsrc: "/assets/img/default-leishmaniose-vaccination.png",
			phone: "(18)3221-2021",
			opening_hours: "Aberto 24 horas",
			location: {
				lat: -22.1208387,
				lng: -51.3985141,
			},
		},
		{
			id: 2,
			name: "Hospital Veterinário São Manoel",
			imgsrc: "/assets/img/default-leishmaniose-vaccination.png",
			phone: "(18)3221-1096",
			opening_hours: "Aberto 24 horas",
			location: {
				lat: -22.1263661,
				lng: -51.3856148,
			},
		},
		{
			id: 3,
			name: "Terra Animal",
			imgsrc: "/assets/img/default-leishmaniose-vaccination.png",
			phone: "(18)3907-7697",
			opening_hours: "Aberto 24 horas",
			location: {
				lat: -22.1105905,
				lng: -51.4277387,
			},
		},
		{
			id: 4,
			name: "Garrido Clínica Veterinária",
			imgsrc: "/assets/img/default-leishmaniose-vaccination.png",
			phone: "(18)3928-4248",
			opening_hours: "Aberto 24 horas",
			location: {
				lat: -22.1416912,
				lng: -51.3931819,
			},
		},
		{
			id: 5,
			name: "Clinvet - Clínica Veterinária e Pet Shop",
			imgsrc: "/assets/img/default-leishmaniose-vaccination.png",
			phone: "(18)98119-5129",
			opening_hours: "Aberto 24 horas",
			location: {
				lat: -22.1033932,
				lng: -51.4333575,
			},
		},
	]);
    
    return (
        <>
            <ContainerBase>
                <LeishmanioseMap
					locations={locations}
					icon="/assets/img/leishmaniose-vaccination-icon.png"
				/>
            </ContainerBase>
        </>
    );
};

export default MapPageLeishmaniose;