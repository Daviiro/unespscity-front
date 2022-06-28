import React, { useState } from "react";
import { Button, ButtonDiv, ContainerColumn, InfoContainer, ListCardContainer } from "./styles";
import ImageCarousel from "../../../../components/images-carousel";

const ListCard = (props) => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ListCardContainer>
            <InfoContainer>
                <ImageCarousel 
                    images={["https://ciclovivo.com.br/wp-content/uploads/2018/10/iStock-536613027.jpg", 
                "https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg",
                "https://thumbs.dreamstime.com/b/paisagem-vertical-no-por-do-sol-63763253.jpg"]}
                />
                <ContainerColumn>
                    <h2> {props.nome} </h2>
                    <h3> {props.sobrenome} </h3>
                    <h4> {props.descricao} </h4>
                </ContainerColumn>
            </InfoContainer>
            <ButtonDiv>

                { 
                    props.report ? (
                        <Button variant="outlined"  onClick={handleClickOpen}>
                            Arrumado 
                        </Button>
                    ) : (
                        <>
                            <Button variant="outlined"> {props.button} </Button>
                        </>
                    )
                }
            </ButtonDiv>
        </ListCardContainer>
    );
};
export default ListCard;