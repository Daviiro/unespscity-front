import React from "react";
import { ContainerRow, Card, GrayLine } from "./styles";

const DashboardChart1 = () => {
	return (
		<>
			<h4 style = {{ marginTop: "5vh", marginLeft: "2.75vw" }}> Novas Solicitações de Serviços: </h4>
			<ContainerRow>
				<Card>
					<img src="/assets/img/home_conservacao_urbana.png" alt="Conservação Urbana"/>
					<GrayLine />
					<h5> 16 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_conservacao_rural.png" alt="Conservação Rural/Áreas Verdes" />
					<GrayLine />
					<h5> 7 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_remocao_detritos.png" alt="Remoção de Detritos" />
					<GrayLine />
					<h5> 8 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_vigilancia_sanitaria.png" alt="Vigilância Sanitária"/>
					<GrayLine />
					<h5> 13 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_controle_pragas.png" alt="Controle de Pragas" />
					<GrayLine />
					<h5> 20 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_animais_domesticos.png" alt="Animais Domésticos" />
					<GrayLine />
					<h5> 25 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_meio_ambiente.png" alt="Meio Ambiente" />
					<GrayLine />
					<h5> 1 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_fauna_flora.png" alt="Fauna e Flora" />
					<GrayLine />
					<h5> 10 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_assistencia_social.png" alt="Assistência Social" />
					<GrayLine />
					<h5> 5 </h5>
				</Card>
				<Card>
					<img src="/assets/img/home_familias_carentes.png" alt="Famílias Carentes" />
					<GrayLine />
					<h5> 2 </h5>
				</Card>
			</ContainerRow>
			<GrayLine style = {{ marginTop: "7vh" }}/>
		</>
	);
};

export default DashboardChart1;
