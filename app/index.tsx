import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { router, Redirect } from "expo-router";

export default function App() {
	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView contentContainerStyle={{ height: "100%" }}>
				<View className="w-full px-4 items-center justify-center min-h-[85vh]">
					<Image
						source={images.logo}
						className="w-[130px] h-[84px]"
						resizeMode="contain"
					/>
					<Image
						source={images.cards}
						className="w-full max-w-[380px] h-[300px]"
						resizeMode="contain"
					/>
					<View className="relative mt-5">
						<Text className="text-3xl text-white font-bold text-center">
							Discover Endless Possibilities with{" "}
							<Text className="text-secondary-200">Aora</Text>
						</Text>
						<Image
							source={images.path}
							className="absolute w-[136px] h-[15px] -bottom-2 -right-8"
							resizeMode="contain"
						/>
					</View>
					<Text className="text-gray-100 text-sm mt-7 font-pregular text-center">
						Where creativity meets innovation: embark on a journey of endless
						exploration with Aora.
					</Text>
					<CustomButton
						title="Continue with Email"
						handlePress={() => router.push("/sign-in")}
						containerStyle="w-full mt-7"
					/>
				</View>
			</ScrollView>
			<StatusBar backgroundColor="#161622" style="light" />
		</SafeAreaView>
	);
}
