import React from "react";
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
import AdminListCard2 from "../../../components/card-list-admin/without-pictures";
import Footer from "../../../components/footer";

const AllRequests = () => {
	return (
		<ContainerBase>
			<AdminHeader />
				<ContentContainer>
					<TopContentContainer>
						<MiniCard
							source="/assets/img/home_logo_azul.png"
							titulo="Todos os Serviços"
							linkItems={[
								{
                                    id: 1,
                                    name: "-- Todos --",
                                    link: "/todas_solicitacoes",
                                },
                                {
                                    id: 2,
                                    name: "Conservação Urbana",
                                    link: "/admin/conservacao_urbana",
                                },
                                {
                                    id: 3,
                                    name: "Conservação Rural/Áreas Verdes",
                                    link: "/admin/conservacao_rural",
                                },
                                {
                                    id: 4,
                                    name: "Remoção de Detritos",
                                    link: "/admin/remocao_detritos",
                                },
                                {
                                    id: 5,
                                    name: "Vigilância Sanitária",
                                    link: "/admin/vigilancia_sanitaria",
                                },
                                {
                                    id: 6,
                                    name: "Controle de Pragas",
                                    link: "/admin/controle_pragas",
                                },
                                {
                                    id: 7,
                                    name: "Animais Domésticos",
                                    link: "/admin/animais_domesticos",
                                },
                                {
                                    id: 8,
                                    name: "Meio Ambiente",
                                    link: "/admin/meio_ambiente",
                                },
                                {
                                    id: 9,
                                    name: "Fauna e Flora",
                                    link: "/admin/fauna_flora",
                                },
                                {
                                    id: 10,
                                    name: "Assistência Social",
                                    link: "/admin/assistencia_social",
                                },
                                {
                                    id: 11,
                                    name: "Famílias Carentes",
                                    link: "/admin/familias_carentes",
                                },
                                {
                                    id: 12,
                                    name: "Serviços Sociais",
                                    link: "/admin/servicos_sociais",
                                },
                                {
                                    id: 13,
                                    name: "Segurança e Defesa Civil",
                                    link: "/admin/seguranca_defesa_civil",
                                },
                                {
                                    id: 14,
                                    name: "Botão do Pânico",
                                    link: "/vias_publicas",
                                },
                                {
                                    id: 15,
                                    name: "Administração Pública",
                                    link: "/admin/administracao_publica",
                                },
                                {
                                    id: 16,
                                    name: "Central de Notificação e Comunicação",
                                    link: "/admin/comunicacao",
                                },
                                {
                                    id: 17,
                                    name: "Sensoriamento Móvel Participativo",
                                    link: "/admin/sensoriamento_remoto",
                                },
                                {
                                    id: 18,
                                    name: "Assossiação Comercial",
                                    link: "/admin/associacao_comercial",
                                },
							]}
						/>
						<div style={{ marginTop: "14px" }}>
							<div style={{ textAlign: "center" }}>
								<Typography variant="h4">
									Todas as Solicitações de Serviços
								</Typography>
							</div>
							<DescriptionText>
								Lista com todos os serviços solicitados 
								pelos habitantes deste município.
							</DescriptionText>
						</div>
						<div></div>
					</TopContentContainer>
					<MidContentContainer>
						<AdminListCard2
							nome="[Adoção de Animais]"
							click="showDeleteConfirm"
							descricao="28/02/2022: Estou doando este cachorro."
						/>
						<AdminListCard2
							nome="[Animais Abandonados]"
							click="showDeleteConfirm"
							descricao="23/04/2022: Encontrei este cachorro abandonado."
						/>
						<AdminListCard2
							nome="[Animais Perdidos]"
							click="showDeleteConfirm"
							descricao="20/10/2022: Perdi meu cachorro. Ele atende pelo nome de Max."
						/>
						<AdminListCard2
							nome="[Animais Sinantrópicos]"
							click="showDeleteConfirm"
							descricao="02/02/2022: Muitos pombos atrapalhando."
						/>
                        <AdminListCard2
							nome="[Inspeção de Instalações]"
							click="showDeleteConfirm"
							descricao="25/07/2022: Bancos quebrados, falta de lixeiras e consequentemente muito lixo na rua."
						/>
                        <AdminListCard2
							nome="[Foco de Escorpião]"
							click="showDeleteConfirm"
							descricao="30/03/2022: Apareceu um escorpião na minha casa."
						/>
                        <AdminListCard2
							nome="[Insetos, Roedores e Caramujos]"
							click="showDeleteConfirm"
							descricao="30/03/2022: Foco de cupim encontrado aqui."
						/>
                        <AdminListCard2
							nome="[Leishmaniose]"
							click="showDeleteConfirm"
							descricao="20/09/2022: Meu cachorro pegou Leishmaniose."
						/>
                        <AdminListCard2
							nome="[Limpeza de Piscinas]"
							click="showDeleteConfirm"
							descricao="23/04/2022: Esta piscina precisa de limpeza."
						/>
                        <AdminListCard2
							nome="[Limpeza de Terreno]"
							click="showDeleteConfirm"
							descricao="23/04/2022: Este terreno precisa de limpeza."
						/>
                        <AdminListCard2
							nome="[Maus-tratos Animais]"
							click="showDeleteConfirm"
							descricao="23/04/2022: Abuso de animal doméstico."
						/>
                        <AdminListCard2
							nome="[Monumentos e Chafarizes]"
							click="showDeleteConfirm"
							descricao="25/07/2022: O Cristo está com muitas Pixações e com a cerca toda quebrada."
						/>
                        <AdminListCard2
							nome="[Botão do Pânico]"
							click="showDeleteConfirm"
							descricao="Eu estou tendo ataque de pânico, vem aqui em casa me ajudar, por favor."
						/>
                        <AdminListCard2
							nome="[Pavimentação]"
							click="showDeleteConfirm"
							descricao="25/07/2022: Asfalto com buracos na frente da Drogaria."
						/>
                        <AdminListCard2
							nome="[Vias Públicas]"
							click="showDeleteConfirm"
							descricao="28/07/2022: Existe um GRANDE buraco na via publica e foi necessário colocar grandes coisas que chamem atenção do motorista."
						/>
                        <AdminListCard2
							nome="[Radar da Dengue]"
							click="showDeleteConfirm"
							descricao="23/04/2022: Encontramos um foco do mosquito da dengue."
						/>
                        <AdminListCard2
							nome="[Iluminação Pública]"
							click="showDeleteConfirm"
							descricao="15/07/2022: Existe uma lampada piscando próximo ao Tenis Club."
						/>
					</MidContentContainer>
				</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AllRequests;