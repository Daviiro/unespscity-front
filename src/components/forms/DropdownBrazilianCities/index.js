import { useState, useEffect } from "react";
import { fetchCitiesForState } from "../../../helpers/IBGE";

const DropdownBrazilianCities = ({ state, onChange = () => {} }) => {
	const [cities, setCities] = useState([]);

	useEffect(() => {
		fetchCitiesForState(state).then((cities) => {
			setCities(cities);
		});
	}, [state]);

	return (
		<select id="city" name="city" onChange={onChange}>
			<option value="">Selecione uma cidade...</option>
			{cities.map((city) => {
				const { id, nome } = city;
				return (
					<option key={id} value={id}>
						{nome}
					</option>
				);
			})}
		</select>
	);
};

export default DropdownBrazilianCities;
