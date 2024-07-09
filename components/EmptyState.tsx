import { View, Text, Image } from "react-native";
import { images } from "@/constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

type EmptyStateProps = {
	title: string;
	subtitle: string;
};

const EmptyState: React.FC<EmptyStateProps> = ({ title, subtitle }) => {
	return (
		<View className="justify-center items-center px-4">
			<Image
				source={images.empty}
				style={{ width: 200, height: 200 }}
				className="w-[270px] h-[215px]"
				resizeMode="contain"
			/>
			<Text className="text-xl text-center font-psemibold text-white mt-2">
				{title}
			</Text>
			<Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>

			<CustomButton
				title="Create Video"
				handlePress={() => router.push("/create")}
				containerStyle="w-full mt-7"
			/>
		</View>
	);
};

export default EmptyState;
