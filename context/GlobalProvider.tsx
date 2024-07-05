import { getCurrentUser } from "@/lib/appwrite";
import { createContext, useEffect, useState, useContext } from "react";

type GlobalContextType = {
	isLoggedIn: boolean;
	setIsLoggedIn?: (value: boolean) => void;
	user: any;
	setUser?: (value: any) => void;
	isLoading: boolean;
};

export const GlobalContext = createContext<GlobalContextType>({
	isLoggedIn: false,
	user: null,
	isLoading: true,
});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }: { children?: React.ReactNode }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState<any>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getCurrentUser()
			.then((result: any) => {
				if (result) {
					setIsLoggedIn(true);
					setUser(result);
				} else {
					setIsLoggedIn(false);
					setUser(null);
				}
			})
			.catch((error: any) => {
				console.log(error);
				setIsLoggedIn(false);
				setUser(null);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return (
		<GlobalContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				user,
				setUser,
				isLoading,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
