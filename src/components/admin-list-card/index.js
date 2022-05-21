import React from "react";
import { Button, ButtonDiv, ContainerColumn, InfoContainer, ListCardContainer } from "./styles";

const AdminListCard = (props) => {
    return (
        <ListCardContainer>
            <InfoContainer>
                <img
                    src = {process.env.PUBLIC_URL + props.source}
                    alt = {props.titulo}
                />
                <ContainerColumn>
                    <h2> {props.nome} </h2>
                    <h3> {props.sobrenome} </h3>
                    <h4> {props.descricao} </h4>
                </ContainerColumn>
            </InfoContainer>
            <ButtonDiv>
                <Button
                >
                    Editar
                </Button>
                <Button

                >
                    Excluir
                </Button>
            </ButtonDiv>
        </ListCardContainer>
    );
};
export default AdminListCard;