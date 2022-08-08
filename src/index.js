import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/Auth/AuthContext";
import AppRoutes from "./AppRoutes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<AuthProvider>
		<AppRoutes />
	</AuthProvider>
);
