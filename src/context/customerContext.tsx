import React, {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import { AuthUserInterface } from "@/interfaces/AuthInterfaces";
import Cookies from "js-cookie";
interface CustomerContextProps {
	userName: string;
	setUserName: (userName: string) => void;
	authToken: string | null;
	setAuthToken: (authToken: string) => void;
	isAuthenticated: boolean;
	setIsAuthenticated: (isAuthenticated: boolean) => void;
	authUserInfo: AuthUserInterface | undefined;
	setAuthUserInfo: (authUserInfo: AuthUserInterface) => void;
}
const CustomerContext = createContext<CustomerContextProps | undefined>(
	undefined
);
export const useCustomer = () => {
	const context = useContext(CustomerContext);
	if (!context) {
		throw new Error("useCustomer must be used within a CustomerProvider");
	}
	return context;
};

interface CustomerProviderProps {
	children: ReactNode;
}

export const CustomerProvider: React.FC<CustomerProviderProps> = ({
	children,
}) => {
	const [userName, setUserName] = React.useState("defaultUserName");
	const [authToken, setAuthToken] = useState<string | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [authUserInfo, setAuthUserInfo] = useState<AuthUserInterface>();
	useEffect(() => {
		const accessToken = Cookies.get("accessToken");
		if (accessToken) {
			setIsAuthenticated(true);
		}
	}, []);
	return (
		<CustomerContext.Provider
			value={{
				userName,
				setUserName,
				authToken,
				setAuthToken,
				isAuthenticated,
				setIsAuthenticated,
				authUserInfo,
				setAuthUserInfo,
			}}
		>
			{children}
		</CustomerContext.Provider>
	);
};
