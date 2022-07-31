import { FavCardContainer, NoFavorite, ImgFavoriteLogo } from "./styles";
import { useNavigate } from "react-router-dom";

const FavoriteCard = (props) => {
	const navigate = useNavigate();
	return (
		<>
			{props.data.length !== 0 ? (
				props.data.map((fav) => (
					<FavCardContainer
						key={fav.id}
						onClick={() => navigate(`../${fav.link}`)}
					>
						<ImgFavoriteLogo
							src={process.env.PUBLIC_URL + fav.img}
							alt={fav.name}
						/>
						<span className="fav-nome">{fav.name}</span>
					</FavCardContainer>
				))
			) : (
				<NoFavorite>
					<span>Você não possui nenhum favorito no momento</span>
				</NoFavorite>
			)}
		</>
	);
};

export default FavoriteCard;
