import { icons } from "@/constants";
import { router, usePathname } from "expo-router";
import {
	View,
	TouchableOpacity,
	TextInput,
	KeyboardTypeOptions,
	Image,
	Alert,
} from "react-native";
import { useState } from "react";

type SearchInputProps = {
	placeholder: string;
	// onChangeText: (text: string) => void;
	inputContainerStyle?: string;
	keyboardType?: KeyboardTypeOptions;
	otherStyles?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
	placeholder,
	// onChangeText,
	otherStyles,
	keyboardType,
}) => {
	const pathname = usePathname();
	const [query, setQuery] = useState("");

	return (
		<View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
			<TextInput
				placeholder={placeholder}
				value={query}
				onChangeText={(e) => setQuery(e)}
				keyboardType={keyboardType}
				className="text-base mt-0.5 text-white flex-1 font-pregular"
				placeholderTextColor={"#7B7B8B"}
			/>
			<TouchableOpacity
				onPress={() => {
					if (!query) {
						return Alert.alert(
							"Missing Query",
							"Please input something to search videos across database."
						);
					}
					if (pathname.startsWith("/search")) {
						router.setParams({ query: query });
					} else {
						router.push(`/search/${query}`);
					}
				}}
			>
				<Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
			</TouchableOpacity>
		</View>
	);
};

export default SearchInput;
