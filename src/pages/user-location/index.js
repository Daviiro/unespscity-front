import React, { useState, useEffect, useContext } from "react";
import DropdownBrazilianCities from "../../components/forms/DropdownBrazilianCities";
import DropdownBrazilianStates from "../../components/forms/DropdownBrazilianStates";
import { Page, Container } from "./styles";
import FormControl from "@mui/material/FormControl";
import LocalContext from "./Context";
import { Link } from "react-router-dom";

const YourLocation = () => {
	useEffect(() => {
		//pegar a geocalizacao de forma automatica
		navigator.geolocation.getCurrentPosition((location) => {
			console.log(location);
		});
	});

	const [formValues, setFormValues] = useContext(LocalContext);

	const handleInputChange = (e) => {
		e.preventDefault();
		const { value, name } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<Page>
			<Container>
				<FormControl
					sx={{ m: 1, minWidth: 120 }}
					className="space-control"
				>
					<DropdownBrazilianStates
						id="state"
						name="state"
						onChange={handleInputChange}
					/>
				</FormControl>
				<FormControl
					sx={{ m: 1, minWidth: 120 }}
					className="space-control"
				>
					<DropdownBrazilianCities
						id="city"
						name="city"
						state={formValues.state}
						onChange={handleInputChange}
					/>
				</FormControl>
			</Container>
		</Page>
	);
};

export default YourLocation;
