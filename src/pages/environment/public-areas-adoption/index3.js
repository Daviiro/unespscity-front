import React from "react";

import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	Square,
} from "../../public-administration/know-city-managers/styles";
import { FormContainer } from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../components/service-description";
import GrayLine from "../../../components/styled-components/gray-line";
import Footer from "../../../components/footer";

const AdocaoAreasRegras = () => {	// posteriormente, cada secretaria modificaria esta página de acordo com as suas leis locais //
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source = "/assets/img/home_meio_ambiente.png"
						titulo = "Meio Ambiente"
						linkItems={[
							{
                                id: 1,
                                name: "Adoção de Áreas Públicas",
                                link: "/adocao_areas_opcoes",
                            },
						]}
					/>
					<ContainerColumn>
						<h1> Adoção de Áreas Públicas </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<a style={{ textDecoration: "none" }} target="_blank"
					   href="https://www.prefeitura.sp.gov.br/cidade/secretarias/subprefeituras/upload/ipiranga/arquivos/Termo.pdf">
						<ServiceDescription description="Nesta página, você pode conhecer as regras de adoção de Áreas Públicas, adaptadas do decreto de São Paulo Nº 57.583 (23/01/2017). Clique AQUI para acessar o documento original." />
					</a>
					<FormContainer> 
						<h3> DECRETO: </h3>
						<h4> Art. 1º Fica instituído o Programa Adote Uma Praça, com o objetivo de viabilizar ações do
							Poder Público Municipal e da sociedade civil visando o aprimoramento de serviços de
							manutenção e zeladoria, bem como a conservação, execução e manutenção de melhorias
							urbanas, ambientais e paisagísticas de praças e de áreas verdes do Município com área
							de até 10.000m² (dez mil metros quadrados), sob exclusiva administração das Prefeituras
							Regionais. </h4>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h3> CAPÍTULO I: DAS DISPOSIÇÕES GERAIS </h3>
						<h4> Art. 2º O Programa Adote Uma Praça tem por objetivo: </h4>
						<h5> I – incentivar e viabilizar ações para a conservação, execução e manutenção de melhorias
							urbanas, ambientais e paisagísticas de praças e de áreas verdes; </h5>
						<h5> II – aperfeiçoar as condições de uso dos espaços públicos e entornos, com melhorias da
							iluminação, limpeza e segurança; </h5>
						<h5> III – incentivar a instalação e a manutenção de mobiliário urbano que atenda as melhores
							práticas de preservação ambiental; </h5>
						<h5> IV – priorizar a recuperação da paisagem urbana e a manutenção da biodiversidade
							existente na Cidade de São Paulo; </h5>
						<h5> V – aprimorar os serviços de manutenção e zeladoria de praças e de áreas municipais; </h5>
						<h5> VI – capacitar e incluir zeladores no mercado de trabalho, criando perspectivas para sua
							reinserção social; </h5>
						<h5> VII – implantar e expandir os meios de acesso à internet nas praças e área verdes. </h5>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h3> CAPÍTULO II: DA IMPLANTAÇÃO DO PROGRAMA ADOTE UMA PRAÇA </h3>
						<h4> Art. 3º O Programa Adote Uma Praça será coordenado pela Secretaria Municipal das Prefeituras Regionais. </h4>
						<h4> Art. 4º Caberá à Secretaria Municipal das Prefeituras Regionais constituir comissão para
							articular a implantação do Programa Adote Uma Praça, que será composta por 2 (dois)
							representantes, sendo um titular e um suplente, de cada um dos seguintes órgãos: </h4>
						<h5> I – Secretaria Municipal das Prefeituras Regionais – SMPR; </h5>
						<h5> II – Secretaria Municipal de Trabalho e Empreendedorismo – SMTE; </h5>
						<h5> III – Secretaria Municipal de Serviços e Obras – SMSO; </h5>
						<h5> IV – Secretaria Municipal do Verde e do Meio Ambiente – SVMA. </h5>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h6> § 1º Os representantes dos órgãos relacionados no “caput” deste artigo serão indicados
							pelos titulares das Secretarias e designados por ato do Secretário Municipal das
							Prefeituras Regionais. </h6>
						<h6> § 2º A Comissão poderá convidar representantes de órgãos e entidades da Administração
							Pública Municipal para participar de suas reuniões, que poderão opinar sobre os temas em
							discussão, no âmbito de suas competências. </h6>
							<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h4> Art. 5º Os Prefeitos Regionais ficam autorizados a celebrar termos de cooperação com a
							iniciativa privada visando a conservação, a execução e a manutenção de melhorias
							urbanas, ambientais e paisagísticas em praças e áreas verdes municipais de até 10.000m²
							(dez mil metros quadrados), que se encontrem sob exclusiva administração da respectiva
							Prefeitura Regional. Parágrafo único. A instrução, análise, celebração, controle e fiscalização 
							dos termos de cooperação que tenham por objeto as áreas referidas no “caput” deste artigo serão de
							responsabilidade das Prefeituras Regionais. </h4>
						<h4> Art. 6º As pessoas físicas e as pessoas jurídicas de direito privado ou público interessadas
							em celebrar termos de cooperação deverão apresentar à Prefeitura Regional responsável
							pela praça ou área verde objeto da proposta, requerimento contendo as seguintes
							informações: </h4>
						<h5> I – proposta de manutenção e das obras e serviços que pretenda realizar e seus respectivos valores; </h5>
						<h5> II – descrição das melhorias urbanas, paisagísticas e ambientais, devidamente instruída,
							se for o caso, com projetos, plantas, croquis, cronogramas e outros documentos pertinentes; </h5>
						<h5> III – período de vigência da cooperação. </h5>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h6> § 1º Tratando-se de pessoa física, o requerimento deverá ser instruído com: </h6>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h5> I – cópia do documento de identidade; </h5>
						<h5> II – cópia da inscrição no Cadastro de Pessoas Físicas – CPF; </h5>
						<h5> III – cópia de comprovante de residência. </h5>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h6> § 1º Tratando-se de pessoa jurídica, o requerimento deverá ser instruído com: </h6>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h5> I – cópia do registro comercial, certidão simplificada expedida pela Junta Comercial do
							Estado, ato constitutivo e alterações subsequentes ou decreto de autorização para
							funcionamento, conforme o caso; </h5>
						<h5> II – cópia da inscrição no Cadastro Nacional de Pessoas Jurídicas – CNPJ. </h5>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h4> Art. 7º Recebido o requerimento, caberá à unidade competente da Prefeitura Regional
							avaliar a conveniência da proposta e verificar o cumprimento dos requisitos previstos neste
							decreto e na legislação aplicável. </h4>
						<h4> Art. 8º No prazo de 5 (cinco) dias úteis, contados do recebimento do requerimento, a
							Prefeitura Regional expedirá comunicado destinado a dar conhecimento público da
							proposta de cooperação, contendo o nome do proponente e o objeto da cooperação. </h4>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h6> § 1º O comunicado deverá ser publicado no Diário Oficial da Cidade e divulgado no Portal
								da Prefeitura do Município de São Paulo na Internet. </h6>
						<h6> § 2º Será aberto prazo de 5 (cinco) dias úteis, contados da data da referida publicação,
								para que outros eventuais proponentes possam manifestar seu interesse quanto ao mesmo objeto. </h6>
						<h6> § 3º Na hipótese de manifestação de interesse pelo mesmo objeto no prazo estabelecido
								no § 2º deste artigo, o novo proponente terá prazo de 10 (dez) dias úteis para apresentar a
								documentação referida no artigo 6º deste decreto. </h6>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h4> Art. 9º Expirado o prazo de que trata o § 2º do artigo 8º deste decreto ou, na hipótese de
								requerimento de outros interessados, transcorrido o prazo de seu § 3º, a unidade
								competente da Prefeitura Regional apreciará os pedidos recebidos, consultados, sempre
								que necessário, os órgãos competentes, e analisará a viabilidade das propostas. </h4>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h6> § 1º Havendo mais de um interessado no objeto, será aprovado o pedido que melhor atender ao interesse público. </h6>
						<h6> § 2º Não serão admitidas propostas que resultem em restrição de acesso à área objeto da
								cooperação ou que impliquem alteração de seu uso. </h6>
						<h6> § 3º O prazo máximo para a análise pela Prefeitura Regional será de 30 (trinta) dias
								contados do recebimento do requerimento. </h6>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h4> Art. 10. Após a celebração, o termo de cooperação deverá ser publicado, na íntegra, no
								Diário Oficial da Cidade, no prazo máximo de 30 (trinta) dias, contados da data de sua assinatura. </h4>
						<h4> Art. 11. Os termos de cooperação terão prazo máximo de validade de 3 (três) anos, contados da data de sua assinatura. </h4>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h6> § 1º Findo seu prazo de validade, os termos de cooperação não serão renovados
							automaticamente, devendo eventual novo pedido atender integralmente o disposto neste decreto. </h6>
						<h6> § 2º Os termos de cooperação conterão cláusula expressa sobre a responsabilidade do interessado quanto às infrações ambientais. </h6>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h4> Art. 12. Nos termos do disposto no § 1º do artigo 50 da Lei nº 14.223, de 26 de setembro
							de 2006, a colocação de mensagens indicativas de cooperação obedecerá aos seguintes parâmetros: </h4>
						<h5> I – para os canteiros centrais e laterais de vias públicas com largura menor que 1,50m (um
							metro e cinquenta centímetros), será permitida a colocação de, no máximo, 1 (uma) placa
							indicativa para cada 100m (cem metros) lineares de extensão, com dimensões máximas
							de 0,60m (sessenta centímetros) de largura por 0,40m (quarenta centímetros) de altura,
							afixada à altura máxima de 0,50m (cinquenta centímetros) do solo; </h5>
						<h5> II – para praças e áreas verdes, com ou sem denominação oficial, e canteiros centrais e
							laterais de vias públicas com largura igual ou maior que 1,50m (um metro e cinquenta
							centímetros), será permitida a colocação de 1 (uma) placa com dimensões máximas de
							0,60m (sessenta centímetros) de largura por 0,40m (quarenta centímetros) de altura,
							afixada à altura máxima de 0,50m (cinquenta centímetros) do solo, a cada 1.500m² (mil e
							quinhentos metros quadrados) ou fração. Em nenhuma hipótese as placas indicativas de cooperação serão luminosas. </h5>
						<h4> Art. 13. As placas com mensagens indicativas de cooperação deverão conter as
							informações sobre o cooperante ou sinal distintivo com símbolos comerciais ou
							logomarcas, além dos dados da cooperação celebrada com o Poder Público Municipal, e
							seguirão modelos previamente estabelecidos pela Comissão de Proteção da Paisagem Urbana – CPPU. </h4>
						<h4> Art. 14. Os cooperantes serão os únicos responsáveis pela realização dos serviços
							descritos no termo de cooperação, bem como por quaisquer danos deles decorrentes
							causados à Administração Pública Municipal e a terceiros. Para a realização dos serviços, a Prefeitura
							Regional competente exigirá, quando entender necessário, a presença de responsáveis técnicos 
							devidamente inscritos no Conselho Regional de Engenharia e Agronomia – CREA ou no Conselho de 
							Arquitetura e Urbanismo – CAU. </h4>
						<h4> Art. 15. No caso de descumprimento do termo de cooperação, o cooperante será notificado para, 
							no prazo de 5 (cinco) dias úteis, comprovar a regularização dos serviços, sob pena de rescisão do termo de cooperação. </h4>
						<h4> Art. 16. O termo de cooperação poderá ser rescindido por ato unilateral e escrito, devidamente 
							justificado, do Prefeito Regional competente, em razão do interesse público ou por solicitação do cooperante. </h4>
						<h4> Art. 17. Encerrada a cooperação, as melhorias dela decorrentes passarão a integrar o patrimônio 
							público municipal, sem qualquer direito de retenção ou indenização, devendo as placas ser retiradas pelo cooperante no prazo de 24 (vinte e quatro) horas.</h4>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h6> § 1º Findo o prazo previsto no “caput” deste artigo ou havendo rescisão do termo de cooperação, 
							as placas não retiradas serão consideradas anúncios irregularmente instalados, ficando sujeitas às penalidades previstas na Lei n° 14.223, de 2006. </h6>
						<h6> § 2º O abandono, a desistência ou o descumprimento do termo de cooperação não dispensa a obrigação de remover as respectivas placas indicativas. </h6>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h4> Art. 18. Poderão ser designados zeladores para as áreas enquadradas nos termos do artigo 1º deste 
							decreto que não forem objeto de termos de cooperação previstos em seu artigo 5º. </h4>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h6> § 1º Os zeladores serão selecionados dentre os habilitados no Programa Operação Trabalho, nos termos 
							da Lei nº 13.178, de 17 de setembro de 2001, que demonstrem aptidão para a qualificação socioprofissional de zelador que lhes será oferecida. </h6>
						<h6> § 2º Os zeladores receberão capacitação adequada, bem como todos os instrumentos necessários ao desempenho de suas atribuições. </h6>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h4> Art. 19. Caberá à Comissão referida no artigo 4º deste decreto, respeitados os limites orçamentários
							e as normas relativas ao Programa Operação Trabalho, definir: </h4>
						<h5> I – o número de zeladores a serem selecionados; </h5>
						<h5> II – as áreas que serão destinadas aos zeladores; </h5>
						<h5> III – a atuação das Secretarias que integram o Programa Adote Uma Praça, no âmbito de suas 
							competências, para o apoio dos zeladores no desempenho de suas atividades. </h5>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
						<h3> CAPÍTULO V: DAS DISPOSIÇÕES FINAIS </h3>
						<h4> Art. 20. As Prefeituras Regionais deverão elaborar e manter cadastro atualizado das áreas de que 
							trata este decreto, disponíveis para cooperação, contendo informações sobre seu estado de conservação,
							área ou extensão, equipamentos e mobiliários urbanos nelas existentes, a ser disponibilizado no Portal da Prefeitura do Município 
							de São Paulo na Internet. Para as áreas que já tenham sido objeto de termo de cooperação, o cadastro 
							de que trata o “caput” deste artigo deverá conter também as seguintes informações: </h4>
						<h5> I – número do termo de cooperação; </h5>
						<h5> II – Prefeitura Regional responsável; </h5>
						<h5> III – nome e demais dados de identificação do cooperante; </h5>
						<h5> IV – objeto e escopo da cooperação; </h5>
						<h5> V – número de placas indicativas da cooperação; </h5>
						<h5> VI – data da publicação do termo de cooperação e respectivo prazo de vigência. </h5>
						<h4> Art. 21. As Prefeituras Regionais deverão adotar as providências necessárias para que os serviços 
							objeto dos termos de cooperação firmados e as respectivas áreas sejam excluídos dos cadastros e planos
							relativos à manutenção das áreas municipais. </h4>
						<h4> Art. 22. A Secretaria Municipal das Prefeituras Regionais expedirá normas complementares necessárias
							à implementação do Programa Adote Uma Praça e disporá sobre casos omissos, ressalvada a competência da CPPU. </h4>
						<h4> Art. 23. Este decreto entrará em vigor na data de sua publicação, revogado o Decreto nº 55.610, de 20 de outubro de 2014. </h4>
						<h6> -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </h6>
					</FormContainer>
				</Square>
				<GrayLine />
				<Footer />
			</ContainerBase>
		</>
	);
};
export default AdocaoAreasRegras;
