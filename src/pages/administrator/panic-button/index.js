import React, { useCallback, useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../components/styled-components/PageStyles";
import AdminHeader from "../../../components/header/admin";
import MiniCard from "../../../components/mini-card";
import Footer from "../../../components/footer";
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { api } from "../../../services/api";
import { PieChart } from "react-minimal-pie-chart";

const AdminBotaoPanico = () => {
	const ws = new WebSocket("ws://localhost:3334");
	const [socketUrl, setSocketUrl] = useState('ws://localhost:3334');
	const [messageHistory, setMessageHistory] = useState([]);
	const { sendMessage, lastJsonMessage, lastMessage } = useWebSocket(socketUrl);
	const [totalUsuarios, setTotalUsuarios] = useState([]);
	const [usuariosSemBotaoCadastrado, setUsuariosSemBotaoCadastrado] = useState(0);
	const [totalBotaoPanicoCadastrados, setTotalBotaoPanicoCadastrados] = useState(0);

	const handleClickSendMessage = useCallback(() => sendMessage('Hello'), []);

	useEffect(() => {
		handleClickSendMessage()
	}, []);

	useEffect(() => {
		if (lastMessage !== null) {
			setMessageHistory((prev) => prev.concat(lastMessage));
			let stringArray = lastMessage.data.split("===");
			alert(`${stringArray[0]}. Bairro: ${stringArray[1]}. Rua: ${stringArray[2]}. Numero: ${stringArray[3]}`);
		}
	}, [lastMessage, setMessageHistory]);

	useEffect( () => {
		async function getTotalUsers() {
			console.log("teste")
			try {
				const { data } = await api.get('/cidadao');
				setTotalUsuarios(data.length);
				const res = await api.get('/get_all_panic_button');
				setTotalBotaoPanicoCadastrados(res.data.length);
				setUsuariosSemBotaoCadastrado(totalUsuarios - totalBotaoPanicoCadastrados)
			}
			catch(e) {
				console.log(e);
			}
		}
		getTotalUsers();
	}, []);
	console.log(totalBotaoPanicoCadastrados)
	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_botao_panico.png"
						titulo="Botão do Pânico"
						linkItems={[]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Botão do Pânico
							</Typography>
						</div>
						<DescriptionText>
							Usuarios que estão com o botão do Pânico ativado
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					<Typography>Total de Usuarios: {totalUsuarios}</Typography>
					<div
						style={{
							width: "60%",
							marginTop: "-10Vh",	
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<PieChart
							center={[50, 50]}
							data={[
								{ title: "Usuarios sem Cadastro no Botão do Panico: " + (totalUsuarios - totalBotaoPanicoCadastrados), value: (totalUsuarios - totalBotaoPanicoCadastrados), color: "#3282b8" },
								{ title: "Usuarios com Cadastro no Botão do Pânico: " + totalBotaoPanicoCadastrados, value: totalBotaoPanicoCadastrados, color: "#133d59" },
							]}
							labelPosition={30}
							lengthAngle={360}
							lineWidth={30}
							radius={35}
							viewBoxSize={[90, 85]}
						/>
					</div>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminBotaoPanico;



/* 	useEffect(() => {
			setMessageHistory((prev) => prev.concat(lastMessage));
			console.log(messageHistory);
			alert("messageHistory");
		}, [lastMessage, setMessageHistory]); */

/* useEffect(() => {
	

	const apiCall = {
		event: "bts:subscribe",
		data: { channel: "connection" },
	};

	ws.onopen = (event) => {
		ws.send(JSON.stringify(apiCall));
	};
	console.log("FOI");
	ws.onmessage = function (event) {
		const json = JSON.parse(event.data);
		console.log(event.data)
		try {
			if ((json.event = "data")) {
				console.log("ENTROU")
			}
		} catch (err) {
			console.log(err);
		}
	};
	//clean up function
	console.log("SAIU")
	return () => ws.close();
}, []);

ws.onmessage = function (event) {
	const json = JSON.parse(event.data);
	console.log(event.data)
	try {
		if ((json.event = "data")) {
			console.log("ENTROU")
		}
	} catch (err) {
		console.log(err);
	}
}; */
/* const [socketUrl, setSocketUrl] = useState('ws://localhost:3334');
const [messageHistory, setMessageHistory] = useState([]);
const { lastJsonMessage, lastMessage } = useWebSocket(socketUrl, {
	onOpen: () => console.log('opened'),
	onMessage: () => {
		if (lastJsonMessage) {
			setMessageHistory((prev) => prev.concat(lastMessage));
			console.log(messageHistory);
			alert("messageHistory");
		}
		console.log("Teste")
	},
	onError: (event) => { console.error(event); },
	shouldReconnect: (closeEvent) => true,
	reconnectInterval: 3000
}); */