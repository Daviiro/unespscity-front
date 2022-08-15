import React from "react";
import Typography from "@mui/material/Typography";
import {
    ContainerBase,
    ContentContainer,
    TopContentContainer,
    DescriptionText,
    MidContentContainer,
} from "../../../components/styled-components/PageStyles";
import AdminHeader from "../../../components/header/admin";
import MiniCard from "../../../components/mini-card";
import Footer from "../../../components/footer";

const AdminDengue = () => {
    return (
        <ContainerBase>
            <AdminHeader />
            <ContentContainer>
                <TopContentContainer>
                    <MiniCard
                        source="/assets/img/home_botao_panico.png"
                        titulo="Botão do Pânico"
                        linkItems={[]}
                    />
                    <div style={{ marginTop: "14px" }}>
                        <div style={{ textAlign: "center" }}>
                            <Typography variant="h4">
                                Botão do Pânico
                            </Typography>
                        </div>
                        <DescriptionText>
                            Usuarios que estão com o botão do Pânico ativado
                        </DescriptionText>
                    </div>
                    <div></div>
                </TopContentContainer>
                <MidContentContainer>
                    
                </MidContentContainer>
            </ContentContainer>
            <Footer />
        </ContainerBase>
    );
};
export default AdminDengue;
