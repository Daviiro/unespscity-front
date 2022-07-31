import { useState } from "react";
import FavoriteCard from "./favorite-card";
import { Container } from "./styles";

const Favorites = (props) => {
	const [isLogged, setIsLogged] = useState(true);
	const { data } = props;
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
