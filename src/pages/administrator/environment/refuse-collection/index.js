import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";
import MiniCard from "../../../../components/mini-card";
import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import Map from "./map";

const AdminRefuseCollection = () => {
	return (
		<ContainerBase>
			<Header />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_meio_ambiente.png"
						titulo="Meio Ambiente"
						linkItems={[
							{
								id: 1,
								name: "Adoção de Áreas Públicas",
								link: "/admin/adocao_areas_publicas",
							},
							{
								id: 2,
								name: "Monitoramento do Tempo",
								link: "/admin/monitoramento",
							},
							{
								id: 3,
								name: "Coleta de Lixo",
								link: "/admin/coleta-de-lixo",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Coleta de Lixo</Typography>
						</div>
						<DescriptionText>
							Adicione as rotas dos caminhões de lixo assim como o
							tipo de lixo com qual o mesmo trabalha
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					<Map />
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AdminRefuseCollection;
