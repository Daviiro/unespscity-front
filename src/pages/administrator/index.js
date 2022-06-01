import React from "react";
import { 
    ContainerBase,
    Content,
    WrapContainer,
    GrayLine,
    ContainerColumn,
} from "./styles";
import Header from "../../components/header";
import { StyledHr } from "../../components/styled-components/StyledHr";
import DashboardChart1 from "../../charts/chart1";
import DashboardChart2 from "../../charts/chart2";
import Footer from "../../components/footer";

const Dashboard = () => {
    return (
        <>
            <ContainerBase>
                <Header />
                <Content>
                    <ContainerColumn>
                        <h1> Dashboard </h1>
                        <StyledHr style = {{ width: "95%" }} />
                        <DashboardChart1 />
                    </ContainerColumn>
                    <DashboardChart2 />
                </Content>
                <GrayLine />
                <Footer />
            </ContainerBase>
        </>
    );
};

export default Dashboard;