import React, { useContext, useState } from "react";
import { StyledDropdownMenu, StyledDropdownItem, IconButton } from "./styles";
import { Link } from "react-router-dom";
import { AiOutlineAreaChart } from "react-icons/ai";
import { Context } from "../../../context/Auth/AuthContext";

const SlideDownMenu = () => {
	const { user } = useContext(Context);
	const token = false;

	const DropdownItem = (props) => {
		return (
			<>
				<StyledDropdownItem>
					<IconButton>{props.icon}</IconButton>
					{props.children}
				</StyledDropdownItem>
			</>
		);
	};
	return (
		<StyledDropdownMenu>
			{ token ? (
				<Link exact to="/" style={{ textDecoration: "none" }}>
					<DropdownItem icon={<AiOutlineAreaChart />}>
						Sair
					</DropdownItem>
				</Link>
			) : (
				<Link to="/login" style={{ textDecoration: "none" }}>
					<DropdownItem icon={<AiOutlineAreaChart />}>
						Login
					</DropdownItem>
				</Link>
			)}
			{user.isAdmin && (
				<>
					<Link to="/admin" style={{ textDecoration: "none" }}>
						<DropdownItem icon={<AiOutlineAreaChart />}>
							Admin
						</DropdownItem>
					</Link>
				</>
			)}
		</StyledDropdownMenu>
	);
};

export default SlideDownMenu;
