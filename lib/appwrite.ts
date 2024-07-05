import {
	Client,
	Account,
	ID,
	Avatars,
	Databases,
	Query,
} from "react-native-appwrite";

export const appwriteConfg = {
	endpoint: "https://cloud.appwrite.io/v1",
	plastform: "com.nativejoe.aoravid",
	projectId: "6686b6bb0036e4f258ab",
	databaseId: "6686be51000108443e4d",
	usersCollectionId: "6686becd001da55aefd4",
	videoCollectionId: "6686bf210015a0f87461",
	storageId: "6686d140001ca9bda8b4",
};

const client = new Client();
client
	.setEndpoint(appwriteConfg.endpoint)
	.setProject(appwriteConfg.projectId)
	.setPlatform(appwriteConfg.plastform);

const account = new Account(client);
const avatar = new Avatars(client);
const database = new Databases(client);

export const createUser = async (
	email: string,
	password: string,
	username: string
) => {
	try {
		const newAccount = await account.create(
			ID.unique(),
			email,
			password,
			username
		);

		if (!newAccount) {
			throw new Error("User not created");
		}

		const avatarUrl = avatar.getInitials(username);
		await signIn(email, password);

		const newUser = await database.createDocument(
			appwriteConfg.databaseId,
			appwriteConfg.usersCollectionId,
			ID.unique(),
			{
				accountId: newAccount.$id,
				username,
				email,
				avatar: avatarUrl,
			}
		);

		return newUser;
	} catch (error: any) {
		console.log(error);
		throw new Error(error.message);
	}
};

export const signIn = async (email: string, password: string) => {
	try {
		const session = await account.createEmailPasswordSession(email, password);
	} catch (error: any) {
		console.log(error);
		throw new Error(error.message);
	}
};

export const getCurrentUser = async () => {
	try {
		const currentAccount = await account.get();

		if (!currentAccount) throw Error;

		const currentUser = await database.listDocuments(
			appwriteConfg.databaseId,
			appwriteConfg.usersCollectionId,
			[Query.equal("accountId", currentAccount.$id)]
		);

		if (!currentUser) throw Error;

		return currentUser.documents[0];
	} catch (error: any) {
		console.log(error);
		throw new Error(error.message);
	}
};
