import React from "react";
import { GrayLine, ServiceContainer } from "./styles";

const ServiceDescription = (props) => {
    return (
        <ServiceContainer>
            <GrayLine/>
            <h3> {props.description} </h3>
            <GrayLine/>
        </ServiceContainer>
    );
};

export default ServiceDescription;