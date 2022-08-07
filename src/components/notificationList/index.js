import { Container, Card } from "./styles";

const NotificationList = (props) => {
	return (
		<Container>
			{props.data.length !== 0 ? (
				props.data.map((notif) => (
					<Card key={notif.id}>
						<span>{notif.title}</span>
						<div
							style={{ display: "flex", flexDirection: "column" }}
						>
							<span className="description-style">
								{notif.description}
							</span>
							<br />
							{notif.status === -1 && <></>}
							{notif.status === 1 && (
								<span>Status: Concluído</span>
							)}
							{notif.status === 2 && (
								<span>Status: Em Aberto</span>
							)}
						</div>
						<div>
							<span>{notif.date.getUTCDate()}</span>/
							<span>{notif.date.getUTCMonth() + 1}</span>/
							<span>{notif.date.getUTCFullYear()}</span>
						</div>
					</Card>
				))
			) : (
				<h4>Você ainda não possui nenhuma notificação</h4>
			)}
		</Container>
	);
};

export default NotificationList;
