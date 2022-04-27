import React from "react";

import { ContainerBase, Header, ContainerRow, ContainerColumn, Square } from './styles'; 

import Logo from '../../assets/home_logo_temporario.png';
import Configuracoes from '../../assets/home_engrenagem.png';
import Icon01 from '../../assets/home_conservacao_urbana.png';
import Icon02 from '../../assets/home_conservacao_rural.png';
import Icon03 from '../../assets/home_remocao_detritos.png';
import Icon04 from '../../assets/home_vigilancia_sanitaria.png';
import Icon05 from '../../assets/home_controle_pragas.png';
import Icon06 from '../../assets/home_animais_domesticos.png';
import Icon07 from '../../assets/home_meio_ambiente.png';
import Icon08 from '../../assets/home_fauna_flora.png';
import Icon09 from '../../assets/home_assistencia_social.png';
import Icon10 from '../../assets/home_familias_carentes.png';
import Icon11 from '../../assets/home_servicos_sociais.png';
import Icon12 from '../../assets/home_seguranca_defesa_civil.png';
import Icon13 from '../../assets/home_botao_panico.png';
import Icon14 from '../../assets/home_administracao_publica.png';
import Icon15 from '../../assets/home_notificacao_comunicacao.png';
import Icon16 from '../../assets/home_sensoriamento_movel_participativo.png';
import Icon17 from '../../assets/home_assossiacao_comercial.png';
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
					<Square>
						<ContainerColumn>
							<img src = {Icon01} alt = "Conservação Urbana" />
							<h4> Conservação Urbana </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img src = {Icon02} alt = "Conservação Rural/Áreas Verdes" />
							<h4> Conservação Rural/Áreas Verdes </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img src = {Icon03} alt = "Remoção de Detritos" />
							<h4> Remoção de Detritos </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img src = {Icon04} alt = "Vigilância Sanitária" />
							<h4> Vigilância Sanitária </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img src = {Icon05} alt = "Controle de Pragas" />
							<h4> Controle de Pragas </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
				</ContainerRow>
				<ContainerRow>
					<Square>
						<ContainerColumn>
							<img src = {Icon06} alt = "Animais Domésticos" />
							<h4> Animais Domésticos </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img src = {Icon07} alt = "Meio Ambiente" />
							<h4> Meio Ambiente </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img src = {Icon08} alt = "Fauna e Flora" />
							<h4> Fauna e Flora </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img src = {Icon09} alt = "Assistência Social" />
							<h4> Assistência Social </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img src = {Icon10} alt = "Famílias Carentes" />
							<h4> Famílias Carentes </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
				</ContainerRow>
				<ContainerRow>
					<Square>
						<ContainerColumn>
							<img src = {Icon11} alt = "Serviços Sociais" />
							<h4> Serviços Sociais </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img src = {Icon12} alt = "Segurança e Defesa Civil" />
							<h4> Segurança e Defesa Civil </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img src = {Icon13} alt = "Botão do Pânico" />
							<h4> Botão do Pânico </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img src = {Icon14} alt = "Administração Pública" />
							<h4> Administração Pública </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img src = {Icon15} alt = "Central de Notificação e Comunicação" />
							<h4> Central de Notificação e Comunicação </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
				</ContainerRow>
				<ContainerRow>
					<Square>
						<ContainerColumn>
							<img src = {Icon16} alt = "Sensoriamento Móvel Participativo" />
							<h4> Sensoriamento Móvel Participativo </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
					<Square>
						<ContainerColumn>
							<img src = {Icon17} alt = "Assossiação Comercial" />
							<h4> Assossiação Comercial </h4>
							<h5> Itens </h5>
						</ContainerColumn>
					</Square>
				</ContainerRow>
				<img src = {Art} alt = "Page Bottom Art" />
			</ContainerBase>
		</>
	);
};
export default Home;