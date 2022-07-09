import { useEffect, useState } from "react";
import { fetchStates, parseStates } from "../../../services/IBGE";
import NativeSelect from "@mui/material/NativeSelect";
import Dropdown from "../Dropdown";

const DropdownBrazilianStates = ({ id, name, onChange = () => {} }) => {
	const [states, setStates] = useState([]);

	useEffect(() => {
		setStates([{ label: "Carregando...", value: "" }]);
		fetchStates()
			.then(parseStates)
			.then((states) => {
				setStates(states);
			});
	}, []);

	return (
		<>
			{/*<Dropdown id={id} name={name} data={states} onChange={onChange} />*/}

			<NativeSelect id={id || name} name={name || id} onChange={onChange}>
				{states.map((item) => {
					if (
						item.label == "Selecione seu estado..." ||
						item.value == "SP"
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
export default DropdownBrazilianStates;
