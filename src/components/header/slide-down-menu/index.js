import React, { useState } from "react";
import { StyledDropdownMenu, StyledDropdownItem, IconButton } from "./styles";
import { Link } from "react-router-dom";
import { AiOutlineAreaChart } from "react-icons/ai";

const SlideDownMenu = () => {
	const [admin, setAdmin] = useState(true); //medida provisória para saber que quem está logado é ou não um admin, em caso de true é um admin

	const DropdownItem = (props) => {
		return (
			<Link to="/admin" style={{ textDecoration: "none" }}>
				<StyledDropdownItem>
					<IconButton>{props.icon}</IconButton>
					{props.children}
				</StyledDropdownItem>
			</Link>
		);
	};
	return (
		<StyledDropdownMenu>
			{admin && (
				<DropdownItem icon={<AiOutlineAreaChart />}>Admin</DropdownItem>
			)}
		</StyledDropdownMenu>
	);
};

export default SlideDownMenu;
