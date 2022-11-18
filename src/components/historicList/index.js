import { Container, Card } from "./styles";

const HistoricList = (props) => {
	return (
		<Container>
			{props.data.length !== 0 ? (
				props.data.map((notif) => (
					<Card key={notif.id}>
						<span>{notif.title}</span>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<span className="description-style">
								{notif.description}
							</span>
						</div>
						<div>
							<span>{notif.date.getUTCDate()}</span>/
							<span>{notif.date.getUTCMonth() + 1}</span>/
							<span>{notif.date.getUTCFullYear()}</span>
						</div>
					</Card>
				))
			) : (
				<h4> O histórico ainda está vazio. </h4>
			)}
		</Container>
	);
};

export default HistoricList;