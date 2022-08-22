import MiniCard from "../../../../components/mini-card";

const MiniCardRemoteSensing = () => {
	return (
		<MiniCard
			source="/assets/img/home_administracao_publica.png"
			titulo="Administração Pública"
			linkItems={[
				{
					id: 1,
					name: "Monitoramento do Guardinha",
					link: "/admin/monitoramento-guardinha",
				},
				{
					id: 2,
					name: "Monitoramento do Trânsito",
					link: "/admin/monitoramento-pessoas-veiculos",
				},
			]}
		/>
	);
};

export default MiniCardRemoteSensing;
