import { useState, useEffect } from "react";
import { Models } from "react-native-appwrite";
import { Alert } from "react-native";

export const useAppwrite = (fn: () => Promise<Models.Document[]>) => {
	const [data, setData] = useState<Models.Document[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await fn();
			setData(response);
		} catch (error: any) {
			Alert.alert("Error", error.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const refetch = () => fetchData();

	return { data, isLoading, refetch };
};
