import React, { useEffect, useState } from "react";
// import { api } from "../../../../services/api";
import MiniCard from "../../../../components/mini-card";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	MidContentContainer,
	DescriptionText,
} from "../../../../components/styled-components/PageStyles";
import AdminHeader from "../../../../components/header/admin";
import Footer from "../../../../components/footer";
import AdminListCard from "../../../../components/card-list-admin";
import AdminListCardAlt from "../../../../components/card-list-admin/alternative";
import Typography from "@mui/material/Typography";

const AdminSynanthropicAnimals = () => {
/*	const [problems, setProblems] = useState([]);
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/animais_sinantropicos');
				setProblems(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, [refresh]);	*/

	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_animais_domesticos.png"
						titulo="Animais Domésticos"
						linkItems={[
							{
								id: 1,
								name: "Animais Abandonados",
								link: "/admin/animais_abandonados",
							},
							{
								id: 2,
								name: "Animais Perdidos",
								link: "/admin/animais_perdidos_opcoes",
							},
							{
								id: 3,
								name: "Maus tratos à Animais",
								link: "/admin/maus_tratos",
							},
							{
								id: 4,
								name: "Animais Sinantrópicos",
								link: "/admin/animais-sinantropicos",
							},
                            {
								id: 5,
								name: "Adoção de Animais",
								link: "/admin/adocao_animais",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Animais Sinantrópicos
							</Typography>
						</div>
						<DescriptionText>
							Consulte aqui a lista de denúncias contra Animais
							Sinantrópicos.
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
				{/*	{
						problems.map((problem) => (
							<AdminListCard
								key={problem._id}
								source={problem.images}
								nome={problem.street}
								source={problem.images}
								nome={problem.street}
								sobrenome={problem.referencePoint}
								descricao={problem.description}
								report={true}
								userId={problem.idUser}
								url="animais_sinantropicos"
								id={problem._id}
								setRefresh={setRefresh}
							/>
						))
					}	*/}
					<AdminListCardAlt
						source="/assets/backup/16.jpg"
						titulo="Animal 1" 
						nome="Rua Francisco Nabas, Jardim Jequitiba"
						sobrenome="Perto do Félix Corretor e Avaliador de Imóveis."
						descricao="Muitos pombos atrapalhando."
					/>
					<AdminListCardAlt
						source="/assets/backup/17.jpg"
						titulo="Animal 2" 
						nome="Rua Gioconda Puschiavo, Jardim Monte Alto"
						sobrenome="Perto da Academia Templo."
						descricao="Há alguns morcegos assustando as pessoas de noite."
					/>
					<AdminListCardAlt
						source="/assets/backup/18.jpg"
						titulo="Animal 3" 
						nome="Rua Hélio Pereti, Jardim Campo Belo"
						sobrenome="Perto da loja Budin Ferramentas."
						descricao="Urubus no telhado."
					/>
					<AdminListCardAlt
						source="/assets/backup/19.jpg"
						titulo="Animal 4" 
						nome="Rua Imil Ésper, Jardim Cambui"
						sobrenome="Perto da Transtec Comércio de Peças."
						descricao="Um falcão anda assustando as pessoas."
					/>
					<AdminListCardAlt
						source="/assets/backup/16.jpg"
						titulo="Animal 5" 
						nome="Rua João Barbosa Sandoval, Parque das Cerejeiras"
						sobrenome="Perto do Mercado Cerejeiras."
						descricao="Os pombos voltaram."
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AdminSynanthropicAnimals;
