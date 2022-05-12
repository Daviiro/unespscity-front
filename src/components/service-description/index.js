import React from "react";
import { ServiceContainer } from "./styles";

const ServiceDescription = (props) => {
    return (
        <ServiceContainer>
            <h2> {props.description} </h2>
        </ServiceContainer>
    );
};

export default ServiceDescription;