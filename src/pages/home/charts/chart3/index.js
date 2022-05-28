import React from "react";
import { Link } from "react-router-dom";
import { ContainerColumn, Card, ContainerColumn2 } from "./styles";

const Chart3 = () => {
	return (
		<>
			<ContainerColumn>
				<h3> Páginas mais Acessadas: </h3>
				<Link
					to="/pavimentacao"
					style={{
						height: "7.5vh",
						width: "75%",
						textDecoration: "none",
						marginBottom: "1vh",
					}}
				>
					<Card>
						<img
							src="/assets/img/home_conservacao_urbana.png"
							alt="Conservação Urbana"
						/>
						<ContainerColumn2>
							<h3> Pavimentação </h3>
							<h5> Conservação Urbana </h5>
						</ContainerColumn2>
					</Card>
				</Link>
				<Link
					to="/iluminacao_publica"
					style={{
						height: "7.5vh",
						width: "75%",
						textDecoration: "none",
						marginBottom: "1vh",
					}}
				>
					<Card>
						<img
							src="/assets/img/home_conservacao_urbana.png"
							alt="Conservação Urbana"
						/>
						<ContainerColumn2>
							<h3> Iluminação Pública </h3>
							<h5> Conservação Urbana </h5>
						</ContainerColumn2>
					</Card>
				</Link>
				<Link
					to="/radar_da_dengue"
					style={{
						height: "7.5vh",
						width: "75%",
						textDecoration: "none",
						marginBottom: "1vh",
					}}
				>
					<Card>
						<img
							src="/assets/img/home_controle_pragas.png"
							alt="Conservação Urbana"
						/>
						<ContainerColumn2>
							<h3> Radar da Dengue </h3>
							<h5> Controle de Pragas </h5>
						</ContainerColumn2>
					</Card>
				</Link>
				<Link
					to="/animais_abandonados"
					style={{
						height: "7.5vh",
						width: "75%",
						textDecoration: "none",
						marginBottom: "0.75vh",
					}}
				>
					<Card>
						<img
							src="/assets/img/home_animais_domesticos.png"
							alt="Conservação Urbana"
						/>
						<ContainerColumn2>
							<h3> Animais Abandonados </h3>
							<h5> Animais Domésticos </h5>
						</ContainerColumn2>
					</Card>
				</Link>
			</ContainerColumn>
		</>
	);
};

export default Chart3;
