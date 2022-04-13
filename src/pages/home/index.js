import React from "react";

import { ContainerBase, Header, ContainerRow, ContainerColumn } from './styles'; 

import Logo from '../../assets/home_logo_temporario.png';
import Configuracoes from '../../assets/home_engrenagem.png';
import Icon01 from '../../assets/home_conservacao.png';
import Icon02 from '../../assets/home_saude_vigilancia.png';
import Icon03 from '../../assets/home_animais_zoonoses.png';
import Icon04 from '../../assets/home_meio_ambiente.png';
import Icon05 from '../../assets/home_assistencia_social.png';
import Icon06 from '../../assets/home_seguranca_defesa.png';
import Icon07 from '../../assets/home_administracao.png';
import Icon08 from '../../assets/home_notificacao_comunicacao.png';
import Icon09 from '../../assets/home_sensoriamento_movel.png';
import Icon10 from '../../assets/home_associacao_comercial.png';
import Art from '../../assets/bottom_art.png';

const Home = () => {
	return (
		<>
			<ContainerBase>
				<Header>
					<img src = {Logo} alt = "Logo" />
					<h1> UnespSCity </h1>
					<h2> Login </h2>
					<img src = {Configuracoes} alt = "config" />
				</Header>
				<ContainerRow>
					<ContainerColumn>
						<img src = {Icon01} alt = "Conservação Pública" />
						<h4> Conservação Pública </h4>
						<h5> Itens </h5>
					</ContainerColumn>
					<ContainerColumn>
						<img src = {Icon02} alt = "Saúde e Vigilância Sanitária" />
						<h4> Saúde e Vigilância Sanitária </h4>
						<h5> Itens </h5>
					</ContainerColumn>
					<ContainerColumn>
						<img src = {Icon03} alt = "Animais e Zoonoses" />
						<h4> Animais e Zoonoses </h4>
						<h5> Itens </h5>
					</ContainerColumn>
					<ContainerColumn>
						<img src = {Icon04} alt = "Meio Ambiente" />
						<h4> Meio Ambiente </h4>
						<h5> Itens </h5>
					</ContainerColumn>
					<ContainerColumn>
						<img src = {Icon05} alt = "Assistência Social" />
						<h4> Assistência Social </h4>
						<h5> Itens </h5>
					</ContainerColumn>
				</ContainerRow>
				<ContainerRow>
					<ContainerColumn>
						<img src = {Icon06} alt = "Segurança e Defesa Civil" />
						<h4> Segurança e Defesa Civil </h4>
						<h5> Itens </h5>
					</ContainerColumn>
					<ContainerColumn>
						<img src = {Icon07} alt = "Administração Pública" />
						<h4> Administração Pública </h4>
						<h5> Itens </h5>
					</ContainerColumn>
					<ContainerColumn>
						<img src = {Icon08} alt = "Centro de Notificação e Comunicação" />
						<h4> Centro de Notificação e Comunicação </h4>
						<h5> Itens </h5>
					</ContainerColumn>
					<ContainerColumn>
						<img src = {Icon09} alt = "Sensoriamento Móvel Participativo" />
						<h4> Sensoriamento Móvel Participativo </h4>
						<h5> Itens </h5>
					</ContainerColumn>
					<ContainerColumn>
						<img src = {Icon10} alt = "Assistência Comercial" />
						<h4> Assistência Comercial </h4>
						<h5> Itens </h5>
					</ContainerColumn>
				</ContainerRow>
				<img src = {Art} alt = "Page Bottom Art" />
			</ContainerBase>
		</>
	);
};
export default Home;
