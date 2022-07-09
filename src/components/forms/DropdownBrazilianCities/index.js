import { useState, useEffect } from "react";
import { fetchCitiesForState, parseCities } from "../../../services/IBGE";
import NativeSelect from "@mui/material/NativeSelect";
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

	return (
		<>
			{/*<Dropdown id={id} name={name} onChange={onChange} data={cities} />*/}
			<NativeSelect id={id || name} name={name || id} onChange={onChange}>
				{cities.map((item) => {
					if (
						item.label == "Selecione sua cidade..." ||
						item.value == "3541406" ||
						item.value == "3501301"
					) {
						const { label, value } = item;
						return (
							<option key={value} value={value}>
								{label}
							</option>
						);
					}
				})}
			</NativeSelect>
		</>
	);
};

export default DropdownBrazilianCities;
