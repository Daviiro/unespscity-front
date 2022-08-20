import React, { useContext, useState } from "react";
import { StyledDropdownMenu, StyledDropdownItem, IconButton } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineAreaChart } from "react-icons/ai";
import { Context } from "../../../context/Auth/AuthContext";

const SlideDownMenu = () => {
	const { user } = useContext(Context);
	const { handleLogout } = useContext(Context);
	const navigate = useNavigate();

	const handleLogOut = async () => {
		await handleLogout();
		navigate('/');
	}

	const DropdownItem = (props) => {
		return (
			<>
				<StyledDropdownItem onClick={props.onClick}>
					<IconButton>{props.icon}</IconButton>
					{props.children}
				</StyledDropdownItem>
			</>
		);
	};
	return (
		<StyledDropdownMenu>
			{user.userId ? (
				<DropdownItem
					icon={<AiOutlineAreaChart />}
					onClick={handleLogOut}
				>
					Sair
				</DropdownItem>
			) : (
				<Link to="/login" style={{ textDecoration: "none" }}>
					<DropdownItem icon={<AiOutlineAreaChart />}>
						Cadastrar-se/Login
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
