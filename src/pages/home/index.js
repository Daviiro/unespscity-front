import React from "react";
import { Link } from "react-router-dom";

import {
	ContainerBase,
	Header,
	ContainerRow,
	ContainerColumn,
	Square,
} from "./styles";

const Home = () => {
	return (
		<>
			<ContainerBase>
				<Header>
					<Link to="/">
						{" "}
						<img
							src={
								process.env.PUBLIC_URL +
								"/assets/img/home_logo_temporario.png"
							}
							alt="Logo"
						/>
					</Link>
					<h1> UnespSCity </h1>
					<Link to="/login" style={{ textDecoration: "none" }}>
						{" "}
						<h2> Login </h2>{" "}
					</Link>
					<img
						src={
							process.env.PUBLIC_URL +
							"/assets/img/home_engrenagem.png"
						}
						alt="Logo"
					/>
				</Header>
				<ContainerRow>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_conservacao_urbana.png"
								}
								alt="Conservação Urbana"
							/>
							<h4> Conservação Urbana </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_conservacao_rural.png"
								}
								alt="Conservação Rural"
							/>
							<h4> Conservação Rural/Áreas Verdes </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_remocao_detritos.png"
								}
								alt="Remoção de Detritos"
							/>
							<h4> Remoção de Detritos </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_vigilancia_sanitaria.png"
								}
								alt="Vigilância Sanitária"
							/>
							<h4> Vigilância Sanitária </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_controle_pragas.png"
								}
								alt="Controle de Pragas"
							/>
							<h4> Controle de Pragas </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
				</ContainerRow>
				<ContainerRow>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_animais_domesticos.png"
								}
								alt="Animais Domésticos"
							/>
							<h4> Animais Domésticos </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_meio_ambiente.png"
								}
								alt="Meio Ambiente"
							/>
							<h4> Meio Ambiente </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_fauna_flora.png"
								}
								alt="Fauna e Flora"
							/>
							<h4> Fauna e Flora </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_assistencia_social.png"
								}
								alt="Assistência Social"
							/>
							<h4> Assistência Social </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_familias_carentes.png"
								}
								alt="Famílias Carentes"
							/>
							<h4> Famílias Carentes </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
				</ContainerRow>
				<ContainerRow>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_servicos_sociais.png"
								}
								alt="Serviços Sociais"
							/>
							<h4> Serviços Sociais </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_seguranca_defesa_civil.png"
								}
								alt="Segurança e Defesa Civil"
							/>
							<h4> Segurança e Defesa Civil </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_botao_panico.png"
								}
								alt="Botão do Pânico"
							/>
							<h4> Botão do Pânico </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_administracao_publica.png"
								}
								alt="Administração Pública"
							/>
							<h4> Administração Pública </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_notificacao_comunicacao.png"
								}
								alt="Central de Notificação e Comunicação"
							/>
							<h4> Central de Notificação e Comunicação </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
				</ContainerRow>
				<ContainerRow>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_sensoriamento_movel_participativo.png"
								}
								alt="Sensoriamento Móvel Participativo"
							/>
							<h4> Sensoriamento Móvel Participativo </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img
								src={
									process.env.PUBLIC_URL +
									"/assets/img/home_assossiacao_comercial.png"
								}
								alt="Assossiação Comercial"
							/>
							<h4> Assossiação Comercial </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
				</ContainerRow>

				<img
					src={process.env.PUBLIC_URL + "/assets/img/bottom_art.png"}
					alt="Page Bottom Art"
				/>
			</ContainerBase>
		</>
	);
};
export default Home;
