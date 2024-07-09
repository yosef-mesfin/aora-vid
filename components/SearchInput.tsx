import { icons } from "@/constants";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	TextInput,
	KeyboardTypeOptions,
	Image,
} from "react-native";

type SearchInputProps = {
	placeholder: string;
	value: string;
	onChangeText: (text: string) => void;
	inputContainerStyle?: string;
	keyboardType?: KeyboardTypeOptions;
	otherStyles?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({
	placeholder,
	value,
	onChangeText,
	inputContainerStyle,
	otherStyles,
	keyboardType,
	...props
}) => {
	const [showPassword, setShowPasswrod] = useState(false);

	return (
		<View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
			<TextInput
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				style={{ color: "white" }}
				keyboardType={keyboardType}
				secureTextEntry={showPassword}
				className="text-base mt-0.5 text-white flex-1 font-pregular"
				placeholderTextColor={"#7B7B8B"}
				{...props}
			/>
			<TouchableOpacity>
				<Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
			</TouchableOpacity>
		</View>
	);
};

export default SearchInput;
