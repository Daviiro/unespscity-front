import { useState, useEffect } from "react";
import { fetchCitiesForState, parseCities } from "../../../services/IBGE";
import Dropdown from "../Dropdown";

const DropdownBrazilianCities = ({ id, name, state, onChange = () => {} }) => {
	const [cities, setCities] = useState([]);

	useEffect(() => {
		setCities([{ label: "Carregando...", value: "" }]);
		fetchCitiesForState(state)
			.then(parseCities)
			.then((cities) => {
				setCities(cities);
			});
	}, [state]);

	return <Dropdown id={id} name={name} onChange={onChange} data={cities} />;
};

export default DropdownBrazilianCities;
