import { TouchableOpacity, Text } from "react-native";

type CustomButtonProps = {
	title: string;
	handlePress: () => void;
	containerStyle?: string;
	textStyle?: string;
	isLoading?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
	title,
	handlePress,
	containerStyle,
	textStyle,
	isLoading,
}) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.8}
			className={`bg-secondary-200 rounded-xl min-h-[62px]
        justify-center items-center ${containerStyle}  ${
				isLoading ? "opacity-50" : ""
			}`}
			disabled={isLoading}
		>
			<Text className={`text-primary font-psemibold text-lg ${textStyle}`}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
