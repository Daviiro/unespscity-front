import React, { useState, useEffect } from "react";
import DropdownBrazilianCities from "../../components/forms/DropdownBrazilianCities";
import DropdownBrazilianStates from "../../components/forms/DropdownBrazilianStates";
import { Page, Container } from "./styles";
const YourLocation = () => {
	useEffect(() => {
		//pegar a geocalizacao de forma automatica
		navigator.geolocation.getCurrentPosition((location) => {
			console.log(location);
		});
	});

	const [formValues, setFormValues] = useState({});

	const handleInputChange = (e) => {
		e.preventDefault();
		const { value, name } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	return (
		<Page>
			<Container>
				<form className="space-control">
					<div>
						<label htmlFor="state">Estado: </label>
						<DropdownBrazilianStates onChange={handleInputChange} />
					</div>

					<div>
						<label htmlFor="city">Cidade: </label>
						<DropdownBrazilianCities
							state={formValues.state}
							onChange={handleInputChange}
						/>
					</div>
				</form>
			</Container>
		</Page>
	);
};

export default YourLocation;
