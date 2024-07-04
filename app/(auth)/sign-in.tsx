import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
	const [form, setForm] = React.useState({
		email: "",
		password: "",
	});

	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const handleSubmit = () => {
		setIsSubmitting(true);
		setTimeout(() => {
			setIsSubmitting(false);
		}, 3000);
	};

	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView>
				<View className="w-full justify-center min-h-[85vh] px-4 my-6">
					<Image
						source={images.logo}
						resizeMode="contain"
						className="w-[115px] h-[35px]"
					/>
					<Text className="text-2xl text-white mt-10 font-psemibold">
						Log in to Aora-Vid
					</Text>
					<FormField
						label="Email"
						placeholder="Enter your email"
						value={form.email}
						onChangeText={(e) => setForm({ ...form, email: e })}
						keyboardType="email-address"
						otherStyles="mt-7"
					/>
					<FormField
						label="Password"
						placeholder="Enter your Password"
						value={form.password}
						onChangeText={(e) => setForm({ ...form, password: e })}
						otherStyles="mt-7"
					/>
					<CustomButton
						title="Sign In"
						handlePress={handleSubmit}
						containerStyle="mt-7"
						isLoading={false}
					/>
					<View className="justify-center pt-5 flex-row gap-2">
						<Text className="text-lg text-gray-100 font-pregular">
							Don't have an account?
						</Text>
						<Link
							href="/sign-up"
							className="text-lg font-psemibold text-secondary"
						>
							Sign Up
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
