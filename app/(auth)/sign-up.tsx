import { View, Text, ScrollView, Image, Alert } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "@/lib/appwrite";

const SignUp = () => {
	const [form, setForm] = React.useState({
		username: "",
		email: "",
		password: "",
	});

	const [isSubmitting, setIsSubmitting] = React.useState(false);
	const handleSubmit = async () => {
		if (!form.email || !form.password || !form.username) {
			Alert.alert("Error", "Please fill all fields");
		}

		setIsSubmitting(true);

		try {
			const result = await createUser(form.email, form.password, form.username);

			router.replace("/home");
		} catch (error: any) {
			Alert.alert("Error", error.message);
		} finally {
			setIsSubmitting(false);
		}
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
						Sign up to Aora-Vid
					</Text>
					<FormField
						label="Username"
						placeholder="Enter your usename"
						value={form.username}
						onChangeText={(e) => setForm({ ...form, username: e })}
						otherStyles="mt-10"
					/>
					<FormField
						label="Email"
						placeholder="Enter your email"
						value={form.email}
						onChangeText={(e) => setForm({ ...form, email: e })}
						keyboardType="email-address"
						otherStyles="mt-5"
					/>
					<FormField
						label="Password"
						placeholder="Enter your Password"
						value={form.password}
						onChangeText={(e) => setForm({ ...form, password: e })}
						otherStyles="mt-5"
					/>
					<CustomButton
						title="Sign Up"
						handlePress={handleSubmit}
						containerStyle="mt-7"
						isLoading={false}
					/>
					<View className="justify-center pt-5 flex-row gap-2">
						<Text className="text-lg text-gray-100 font-pregular">
							Already have an account?
						</Text>
						<Link
							href="/sign-in"
							className="text-lg font-psemibold text-secondary"
						>
							Sign In
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
