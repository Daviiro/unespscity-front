import React, { useState } from "react";
import Map from "./map";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	MidContentContainer,
	DescriptionText,
} from "../../../../components/styled-components/PageStyles";
import AdminHeader from "../../../../components/header/admin";
import Footer from "../../../../components/footer";
import Typography from "@mui/material/Typography";
import MiniCard from "../../../../components/mini-card";

const AdminGuardian = () => {
	const [routes, setRoutes] = useState([
		{
			_id: 1,
			title: "something",
			origin: "moresomething",
			destination: "yeah another something",
			waypoints: [],
		},
	]);

	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer></TopContentContainer>
				<MidContentContainer>
					<Map routes={routes} />
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AdminGuardian;
