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
import Chart from "react-apexcharts";

const Monitoring = (props) => {
	const [socketUrl, setSocketUrl] = useState('ws://localhost:3334');
	const [messageHistory, setMessageHistory] = useState([]);
	const [total, setTotal] = useState([]);
	const [temperatureAverage, setTemperatureAverage] = useState([0, 0, 0, 0, 0, 0, 0]);
	const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

	useEffect(() => {
		if (lastMessage !== null) {
			let string = lastMessage.data;
			let array = string.split("===")
			let newTemperatureAverage = parseFloat(array[1])
			console.log(typeof newTemperatureAverage.toFixed(1))
			setMessageHistory((prev) => prev.concat(lastMessage));
			if (newTemperatureAverage !== undefined) {
				setTemperatureAverage(
					temperatureAverage.map((num, index) => {
						/* console.log("011 - ", temperatureAverage)
						console.log("013 - ", num)
						console.log(newTemperatureAverage) */
						return index + 1 < temperatureAverage.length ? temperatureAverage[index + 1] : (newTemperatureAverage.toFixed(1)).valueOf()
					})
				)
			}
		}
	}, [lastMessage, setMessageHistory]);
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 27 && setIsFavorite(true)
		);
	}, []);

	useEffect(() => {
		/* const apiCall = {
			event: "panic:subscribe",
			data: { channel: "connection" },
		};

		sendMessage(JSON.stringify(apiCall)); */
		handleClickSendMessage()
		console.log("TESTANDO")
	}, []);

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

	const state = {
		series: [
			{
				name: "Media das Temperaturas", data: temperatureAverage
			}
		],

		options: {
			chart: {
				height: 350,
				type: 'line',
				dropShadow: { enabled: true, color: '#000', top: 18, left: 7, blur: 10, opacity: 0.2 },
				toolbar: { show: false }
			},
			colors: ['#3282b8', '#133d59'],
			dataLabels: {
				enabled: true,
			},
			stroke: {
				curve: 'smooth'
			},
			title: {
				text: 'Média dos sensores da Temperatura', align: 'left'
			},
			grid: {
				borderColor: '#e7e7e7',
				row: {
					colors: ['transparent', 'transparent'], opacity: 0.5
				},
			},
			markers: {
				size: 1
			},
			xaxis: {
				categories: ['-18 segundos', '-15 segundos', '-12 segundos', '-09 segundos', '-06 segundos', '-03 segundos', 'agora'],
				title: { text: 'Segundos' }
			},
			yaxis: {
				title: { text: 'Temperatura' },
				min: 18,
				max: 28
			},
			legend: {
				position: 'top',
				horizontalAlign: 'right',
				floating: true,
				offsetY: -25,
				offsetX: -5
			}
		},
	}

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
					<>
						<Chart
							options={state.options}
							series={state.series}
							type="line"
							height={380}
							width={760}
						/>
					</>
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
								<span key={idx}>{message ? total : null}</span>
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
