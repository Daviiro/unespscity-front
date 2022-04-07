import React, { useState } from "react";

const Login = () => {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	return (
		<>
			<div>
				<h1>Está vai ser a página de login</h1>
			</div>
		</>
	);
};
export default Login;
