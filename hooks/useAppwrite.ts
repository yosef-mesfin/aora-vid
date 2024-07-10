import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { Posts } from "@/types/posts";

export const useAppwrite = (fn: () => Promise<Posts[]>) => {
	const [data, setData] = useState<Posts[]>([]);
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
