import React, { useState } from "react";
import {
	GoogleMap,
	DirectionsRenderer,
	useJsApiLoader,
	Marker,
	Autocomplete,
} from "@react-google-maps/api";

const ShowAllRoutes = (props) => {
	const { center } = props;
	const google = window.google;
	const [isLoading, setLoading] = useState(true);

	//mockup data
	const data = JSON.parse(localStorage.getItem("locationLocalStorage"));
	const [routes, setRoutes] = useState([
		{
			_id: "blabal",
			cityid: data.city,
			title: "Rota do SR. Miguel",
			origem: "Rua Anna Gerbasi - Jardim Aquinopolis, Presidente Prudente - SP, Brasil",
			destino: "Vila Laide, Presidente Prudente - SP, Brasil",
			waypoints: [],
		},
	]);

	//pra quando conectar com o back e puxar as rotas
	/*
    const handleFetchRoutes = async => {
        const data = JSON.parse(localStorage.getItem("locationLocalStorage"));

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
					setRoutes(res.data);
					console.log(res.data);
					setLoading(false);
				});
		} catch (err) {
			console.log(err);
		}
    }
    useEffect(() => {
		handleFetchRoutes();
    }, []);
    
    if (isLoading) {
		return <div>Loading...</div>;
	} */

	return <>aqui vou mostrar todas as rotas do guardinha</>;
};

export default ShowAllRoutes;
