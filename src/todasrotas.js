//este arquivo só vai ter a função de ter todas as rotas da aplicação, é destinada somente a teste e deve depois ser apagada//

import React from "react";
import { Link } from "react-router-dom";
const TodasRotas = () => {
	return (
		<>
			<Link to="/">Home</Link>
			<br />
			<Link to="/login">Login</Link>
		</>
	);
};
export default TodasRotas;
