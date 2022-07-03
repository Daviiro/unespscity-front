import { useState } from "react";
import FavoriteCard from "./favorite-card";
import { Container } from "./styles";

const Favorites = () => {
	const data = [
		/*
		{
			id: 1,
			name: "Fiscalização de Instalações",
			img: "/assets/img/home_conservacao_urbana.png",
			link: "/fiscalizacao_de_instalacoes",
		},
		{
			id: 2,
			name: "Pavimentação",
			img: "/assets/img/home_conservacao_urbana.png",
			link: "/fiscalizacao_de_instalacoes",
		},
		{
			id: 3,
			name: "Vias Públicas",
			img: "/assets/img/home_conservacao_urbana.png",
			link: "/fiscalizacao_de_instalacoes",
		},
		{
			id: 4,
			name: "Iluminação",
			img: "/assets/img/home_conservacao_urbana.png",
			link: "/fiscalizacao_de_instalacoes",
		},
		{
			id: 5,
			name: "Algo",
			img: "/assets/img/home_conservacao_urbana.png",
			link: "/fiscalizacao_de_instalacoes",
		},*/
	];

	const [isLogged, setIsLogged] = useState(true);
	console.log(data.length);
	return (
		<>
			{isLogged && (
				<Container>
					<FavoriteCard data={data} />
				</Container>
			)}
		</>
	);
};
export default Favorites;
