import NativeSelect from "@mui/material/NativeSelect";

const Dropdown = ({ id, name, data = [], onChange = () => {} }) => {
	return (
		<NativeSelect
			sx={{
				color: "#000000",
			}}
			id={id || name}
			name={name || id}
			onChange={onChange}
		>
			{data.map((item) => {
				const { label, value } = item;
				return (
					<option key={value} value={value}>
						{label}
					</option>
				);
			})}
		</NativeSelect>
	);
};

export default Dropdown;
