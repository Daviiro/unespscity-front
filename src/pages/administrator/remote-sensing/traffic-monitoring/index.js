import React from "react";
import Maps from "./maps";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	MidContentContainer,
	DescriptionText,
} from "../../../../components/styled-components/PageStyles";
import AdminHeader from "../../../../components/header/admin";
import MiniCardRemoteSensing from "../mini-card-remote-sensing";
import { Typography } from "@mui/material";

const TrafficMonitoring = () => {
	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCardRemoteSensing />
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Monitoramento do Trânsito
							</Typography>
						</div>
						<DescriptionText>
							Aqui você pode vizualizar o trânsito da sua cidade
							para tomar as melhores decisões em relação ao mesmo
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					<Maps />
				</MidContentContainer>
			</ContentContainer>
		</ContainerBase>
	);
};

export default TrafficMonitoring;
