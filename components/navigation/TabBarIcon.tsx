// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

// import Ionicons from "@expo/vector-icons/Ionicons";
// import { type IconProps } from "@expo/vector-icons/build/createIconSet";
// import { type ComponentProps } from "react";
import {
	Image,
	ImageSourcePropType,
	StyleProp,
	View,
	ViewStyle,
	Text,
} from "react-native";

// export function TabBarIcon({
// 	style,
// 	...rest
// }: IconProps<ComponentProps<typeof Ionicons>["name"]>) {
// 	return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
// }

type TabBarIconProps = {
	icon: ImageSourcePropType;
	color: string;
	name: string;
	focused: boolean;
	style?: StyleProp<ViewStyle>;
};

export const TabBarIcon: React.FC<TabBarIconProps> = ({
	icon,
	color,
	name,
	focused,
	style,
}) => {
	return (
		<View className="items-center justify-center gap-2">
			<Image
				source={icon}
				resizeMode="contain"
				tintColor={color}
				className="w-6 h-6"
			/>
			<Text
				className={`text-xs ${focused ? "font-psemibold" : "font-pregular"}`}
				style={{ color: color }}
			>
				{name}
			</Text>
		</View>
	);
};
