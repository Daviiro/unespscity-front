import React from "react";
import { Container, Circle } from "./styles";

const DashboardDescription = (props) => {
    return (
        <Container>
            <Circle style={{ backgroundColor: props.color }}/>
            <h4> {props.label} </h4>
        </Container>
    );
};
export default DashboardDescription;