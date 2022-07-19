import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/Auth/AuthContext";
import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	InMemoryCache,
	split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import AppRoutes from "./AppRoutes";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const httpLink = new HttpLink({
	uri: "http://localhost:4000/graphql",
});

const wsLink = new WebSocketLink({
	uri: "ws://localhost:4000/graphql",
	options: {
		reconnect: true,
	},
});

const splitLink = split(
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === "OperationDefinition" &&
			definition.operation === "subscription"
		);
	},
	wsLink,
	httpLink
);

const client = new ApolloClient({
	link: splitLink,
	cache: new InMemoryCache(),
});

root.render(
	<StrictMode>
		<AuthProvider>
			<ApolloProvider client={client}>
				<AppRoutes />
			</ApolloProvider>
		</AuthProvider>
	</StrictMode>
);
