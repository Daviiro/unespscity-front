import React from "react";
import HomePieChart from "../types/donut";

const DashboardChart1 = () => {
	const totalSolicitados = 233; // Número total de serviços solicitados //
	const totalResolvidos = 186; // Número total de serviços resolvios //
	let totalTotal = totalSolicitados + totalResolvidos;
	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<h3 style={{ marginTop: "0vh", marginBottom: "0vh" }}>
					{" "}
					Registro de Problemas:{" "}
				</h3>
				<span style={{ marginBottom: "4vh" }}> {totalTotal} </span>
				<HomePieChart
					solved={totalResolvidos}
					unsolved={totalSolicitados}
				/>
			</div>
		</>
	);
};

export default DashboardChart1;
