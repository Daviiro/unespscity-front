import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../components/styled-components/PageStyles";
import Header from "../../components/header";
import { HistoryCard } from "./styles";
import Footer from "../../components/footer";

const Profile = () => {
	const [historyData, setHistoryData] = useState([
		{
			id: 1,
			service: "Fiscalização de Instalações",
			status: 1,
			date: new Date(),
		},
	]);

	return (
		<ContainerBase>
			<Header />
			<ContentContainer>
				<TopContentContainer>
					<div></div>
					<div style={{ textAlign: "center" }}>
						<Typography variant="h5">Meu perfil</Typography>
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/img/profilepic.png"
							}
							alt="Profile's picture"
							style={{
								width: "140px",
								height: "auto",
								margin: "0",
								opacity: "0.95",
							}}
						/>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					<Typography variant="h6">
						Histórico de solicitações
					</Typography>
					{historyData.length !== 0 ? (
						historyData.map((his) => {
							if (his) {
								return (
									<HistoryCard>
										<div>
											<Typography variant="subtitle1">
												Serviço: {his.service}
											</Typography>
										</div>
										<div>
											<Typography variant="subtitle1">
												Data da requisição:
												<span>
													{his.date.getUTCDate()}
												</span>
												/
												<span>
													{his.date.getUTCMonth() + 1}
												</span>
												/
												<span>
													{his.date.getUTCFullYear()}
												</span>
											</Typography>
										</div>
										<div>
											<Typography variant="subtitle1">
												{his.status === 1 && (
													<span>
														Status: Requisição
														enviada
													</span>
												)}
												{his.status === 2 && (
													<span>
														Status: Requisição
														recebida
													</span>
												)}
												{his.status === 3 && (
													<span>
														Status: Requisição
														realizada
													</span>
												)}
											</Typography>
										</div>
									</HistoryCard>
								);
							}
						})
					) : (
						<h4>Você ainda não possui nenhuma solicações</h4>
					)}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default Profile;
