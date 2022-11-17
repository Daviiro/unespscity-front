import React, { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	MidContentContainer,
} from "../../components/styled-components/PageStyles";
import Header from "../../components/header";
import Footer from "../../components/footer";
import HistoryItem from "../../components/history-item";
import { Context } from "../../context/Auth/AuthContext";
import { Input } from "@mui/material";
import { AiOutlineEdit } from "react-icons/ai";

const Profile = () => {
	const { user } = useContext(Context);
	const [historyData, setHistoryData] = useState([
		/*{
			_id: 1,
			userId: 32414,
			serviceName: "Fiscalização de Instalações",
			description: "Lore ypsulumflasjfa;lfja",
			street: "Nove de Julho",
			streetNumber: 234,
			isResolved: 1,
			date: new Date(),
		},
		{
			_id: 2,
			userId: 32414,
			serviceName: "Fiscalização de algo",
			description: "Lore ypsulumflasjfa;lfja",
			street: "Nove de Julho",
			streetNumber: 234,
			isResolved: 2,
			date: new Date(),
		},*/
	]);
	const [Value, setValue] = useState(user.name);
	const [EditMode, setEditMode] = useState(false);
	const toggleEditMode = () => setEditMode(!EditMode);
	return (
		<ContainerBase>
			<Header />
			<ContentContainer>
				<TopContentContainer>
					<div></div>
					<div style={{ textAlign: "center" }}>
						<Typography variant="h5">Meu perfil</Typography>
						{/**
					 * <div
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								width: "300px",
								justifyContent: "space-between",
								marginTop: "25px",
							}}
						>
							<Typography variant="body1">Nome:</Typography>
							<Input
								type="text"
								disabled={!EditMode}
								value={Value}
								onChange={(e) => setValue(e.target.value)}
								onBlur={toggleEditMode}
							/>
							<AiOutlineEdit
								onClick={() => {
									setEditMode(!EditMode);
								}}
							/>
						</div>
					 */}
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					<Typography variant="h6">
						Histórico de solicitações
					</Typography>
					{historyData.length !== 0 ? (
						historyData.map((his) => {
							if (his.userId === 32414) {
								//user.userId)
								return <HistoryItem key={his._id} data={his} />;
							}
						})
					) : (
						<h4>Você ainda não possui nenhuma solicitação</h4>
					)}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default Profile;
