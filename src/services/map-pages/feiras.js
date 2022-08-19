import React, { useState, useEffect } from "react";
import FairsMap from "../../pages/social-services/fair/map";
import { ContainerBase } from "./styles";
import axios from "axios";

const MapPageFeiras = () => {
	const [isLoading, setLoading] = useState(true);
    const [locations, setLocations] = useState([
		{
			id: 1,
			name: "Feira 1",
			imgsrc: "/assets/img/fair-icon.png",
			operating_days: {
				dom: true,
				seg: false,
				ter: false,
				qua: false,
				qui: false,
				sex: false,
				sab: true,
			},

			openingHour: new Date(),
			closingHour: new Date(),
			location: {
				lat: -22.131951,
				lng: -51.40933,
			},
		},
		{
			id: 2,
			name: "Feira 2",
			imgsrc: "/assets/img/fair-icon.png",
			operating_days: {
				dom: true,
				seg: false,
				ter: false,
				qua: false,
				qui: false,
				sex: false,
				sab: true,
			},
			operating_time: {
				open: 7,
				close: 12,
			},
			location: {
				lat: -22.131951,
				lng: -51.40933,
			},
		},
	]);

	const handleGet = async () => {
		const data = JSON.parse(localStorage.getItem("locationLocalStorage"));
		//console.log(formValues.city);
		console.log(process.env.REACT_APP_GOOGLEMAPSAPIKEY);
		try {
			await axios
				.get(
					`http://localhost:${process.env.REACT_APP_PORT_NUMBER}/api/fair/cityid`,
					{
						params: {
							cityid: data.city,
						},
					}
				)
				.then((res) => {
					setLocations(res.data);
					console.log("fdkhfalkha");
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
                <FairsMap
					locations={locations}
					icon="/assets/img/fair-icon.png"
				/>
            </ContainerBase>
        </>
    );
};

export default MapPageFeiras;