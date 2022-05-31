import React from "react";
import { PieChart } from "react-minimal-pie-chart";

const PagesPieChart = ({solved, unsolved}) => {
    let title1 = "Solicitados: " + unsolved;
    let title2 = "Resolvidos: " + solved;
    solved = parseInt(solved);
    unsolved = parseInt(unsolved);
    return (
        <PieChart
            center = {[75, 50]}
            data = {[
                {title: title2, value: solved, color: "#3282b8"},
                {title: title1, value: unsolved, color: "#133d59"},
            ]}
            labelPosition = {50}
            lengthAngle = {360}
            lineWidth = {30}
            radius = {50}
            viewBoxSize = {[150, 150]}
        />
    )
};

export default PagesPieChart;