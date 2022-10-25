import styled from "styled-components";

export const FavCardContainer = styled.div`
	height: 100%;
	border-right: 3px solid lightgray;
	min-width: 12rem;
	margin-right: 5px;
	padding: 0.4rem;
	display: flex;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-weight: 549;
	.fav-nome {
		margin-top: 10px;
	}

	.no-favorite {
		text-align: center;
		color: red;
		font-size: 40px;
		background-color: red;
	}
`;

export const NoFavorite = styled.div`
	text-align: center;
	color: #010101;
	font-size: 20px;
	display-flex;
    align-items: center;
    justify-content: center;
    width: 100%
`;

export const ImgFavoriteLogo = styled.img`
	width: 80px;
`;
