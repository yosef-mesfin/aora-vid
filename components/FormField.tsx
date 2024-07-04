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

type FormFieldProps = {
	label: string;
	placeholder: string;
	value: string;
	onChangeText: (text: string) => void;
	inputContainerStyle?: string;
	keyboardType?: KeyboardTypeOptions;
	otherStyles?: string;
};

const FormField: React.FC<FormFieldProps> = ({
	label,
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
		<View className={`space-y-2 ${otherStyles}`}>
			<Text className="text-base text-gray-100 font-medium">{label}</Text>
			<View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
				<TextInput
					placeholder={placeholder}
					value={value}
					onChangeText={onChangeText}
					style={{ color: "white" }}
					keyboardType={keyboardType}
					secureTextEntry={showPassword}
					className="flex-1 text-white fnot-psemi-bold text-base"
					placeholderTextColor={"#7B7B8B"}
					{...props}
				/>
				{label === "Password" && (
					<TouchableOpacity onPress={() => setShowPasswrod((prev) => !prev)}>
						<Image
							source={!showPassword ? icons.eye : icons.eyeHide}
							className="w-6 h-6"
							resizeMode="contain"
						/>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

export default FormField;
