import React, { useEffect } from "react";
import { Page, Container } from "./styles";
const YourLocation = () => {
	useEffect(() => {
		//pegar a geocalizacao de forma automatica
		navigator.geolocation.getCurrentPosition((location) => {
			console.log(location);
		});
	});
	return (
		<Page>
			<Container>
				<form className="space-control">
					<div>
						<label htmlFor="state">Estado: </label>
						<select id="state">
							<option value="">Selecione um estado...</option>
						</select>
					</div>

					<div>
						<label htmlFor="city">Cidade: </label>
						<select id="city">
							<option value="">Selecione uma cidade...</option>
						</select>
					</div>
				</form>
			</Container>
		</Page>
	);
};

export default YourLocation;
