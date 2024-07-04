import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { icons } from "@/constants";

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarActiveTintColor: "#FFA001",
				tabBarInactiveTintColor: "#CDCDE0",
				tabBarStyle: {
					backgroundColor: "#161622",
					borderTopWidth: 1,
					borderTopColor: "#232533",
					height: 84,
				},
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name="Home"
							icon={icons.home}
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="bookmarks"
				options={{
					title: "Bookmarks",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name="Bookmark"
							icon={icons.bookmark}
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="create"
				options={{
					title: "Create",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name="Create"
							icon={icons.plus}
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name="Profile"
							icon={icons.profile}
							color={color}
							focused={focused}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
