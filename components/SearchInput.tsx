import { icons } from "@/constants";
import {
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
	otherStyles,
	keyboardType,
}) => {
	return (
		<View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
			<TextInput
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				keyboardType={keyboardType}
				className="text-base mt-0.5 text-white flex-1 font-pregular"
				placeholderTextColor={"#7B7B8B"}
			/>
			<TouchableOpacity>
				<Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
			</TouchableOpacity>
		</View>
	);
};

export default SearchInput;
