import React, { useState, useEffect, useCallback } from "react";
import Header from "../../../components/header";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../components/styled-components/PageStyles";
import MiniCard from "../../../components/mini-card";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Typography from "@mui/material/Typography";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import Footer from "../../../components/footer";
import Map from "./map";
import Favorites from "../../../components/favorites";
import useWebSocket, { ReadyState } from 'react-use-websocket';

const Monitoring = (props) => {
	const [socketUrl, setSocketUrl] = useState('ws://localhost:3334');
	const [messageHistory, setMessageHistory] = useState([]);
	const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

	useEffect(() => {
		if (lastMessage !== null) {
		setMessageHistory((prev) => prev.concat(lastMessage));
		}
	}, [lastMessage, setMessageHistory]);
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 27 && setIsFavorite(true)
		);
	}, []);

	useCallback(() => sendMessage('Hello'), []);

	const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

	const connectionStatus = {
		[ReadyState.CONNECTING]: 'Connecting',
		[ReadyState.OPEN]: 'Open',
		[ReadyState.CLOSING]: 'Closing',
		[ReadyState.CLOSED]: 'Closed',
		[ReadyState.UNINSTANTIATED]: 'Uninstantiated',
	}[readyState];

	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 27,
				name: "Coleta de Lixo",
				img: "/assets/img/home_meio_ambiente.png",
				link: "/coleta-de-lixo",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 27,
				name: "Coleta de Lixo",
				img: "/assets/img/home_meio_ambiente.png",
				link: "/coleta-de-lixo",
			}); //se desfavoritou o servico
		}
		setIsFavorite(!isFavorite);
	};

	const routes = [
		{
			id: 1,
			points: [
				{
					lat: -22.131951,
					lng: -51.40933,
				},
				{
					lat: -22.09763957730908,
					lng: -51.41680879940989,
				},
				{
					lat: -22.092304090035935,
					lng: -51.40159869150531,
				},
			],
			id: 2,
			points: [
				{
					lat: -22.131951,
					lng: -51.40933,
				},
				{
					lat: -22.09764,
					lng: -51.416807,
				},
				{
					lat: -22.0923,
					lng: -51.401594,
				},
			],
		},
	];

	return (
		<ContainerBase>
			<Header />
			<Favorites data={props.data} />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_meio_ambiente.png"
						titulo="Meio Ambiente"
						linkItems={[
							{
								id: 1,
								name: "Adoção de Áreas Públicas",
								link: "/adocao_areas_opcoes",
							},
							{
								id: 2,
								name: "Monitoramento do Tempo",
								link: "/monitoramento",
							},
							{
								id: 3,
								name: "Coleta de Lixo",
								link: "/coleta-de-lixo",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Monitoramento do Tempo</Typography>
						</div>
						<DescriptionText>
							Neste serviço você terá informações sobre o tempo, como por exemplo, a temperatura, vento, umidade, entre outras informações.
						</DescriptionText>
					</div>
					{isFavorite ? (
						<span>
							<AiFillStar
								style={{
									cursor: "pointer",
									margin: ".8rem",
									stroke: "black",
									strokeWidth: "5",
								}}
								color={"yellow"}
								size={25}
								onClick={() => handleFavorite()}
							/>
						</span>
					) : (
						<AiOutlineStar
							style={{
								cursor: "pointer",
								margin: ".8rem",
								stroke: "black",
								strokeWidth: "5",
							}}
							size={25}
							onClick={() => handleFavorite()}
						/>
					)}
					<StyledHr />
				</TopContentContainer>
				<MidContentContainer>
					<Map routes={routes} />
					<div>
						<button
							onClick={handleClickSendMessage}
							disabled={readyState !== ReadyState.OPEN}
						>
							Click Me to send 'Hello'
						</button>
						<span>The WebSocket is currently {connectionStatus}</span>
						{lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
						<ul>
							{messageHistory.map((message, idx) => (
							<span key={idx}>{message ? message.data : null}</span>
							))}
						</ul>
					</div>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default Monitoring;
