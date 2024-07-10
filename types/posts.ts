import { Models } from "react-native-appwrite";

export interface Posts extends Models.Document {
	title: string;
	video: string;
	thumbnail: string;
	creator: {
		username: string;
		avatar: string;
	};
}
