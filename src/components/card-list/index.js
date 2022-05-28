import React from "react";
import { ContainerColumn, ListCardContainer } from "./styles";

const ListCard = (props) => {
    return (
        <ListCardContainer>
            <img
                src = {process.env.PUBLIC_URL + props.source}
                alt = {props.titulo}
            />
            <ContainerColumn>
                <h2> {props.nome} </h2>
                <h3> {props.sobrenome} </h3>
                <h4> {props.descricao} </h4>
            </ContainerColumn>
        </ListCardContainer>
    );
};
export default ListCard;