// import { PrismaClient } from '@prisma/client';
import { auth } from '../src/lib/server/lucia';

// const db = new PrismaClient();

// type User = {
// 	id: number;
// 	name: string;
// 	usename: string;
// };

// type Article = {
// 	id: number;
// 	title: string;
// 	content: string;
// };

async function main() {
	await auth.createUser({
		key: {
			providerId: 'username',
			providerUserId: 'a',
			password: 'a'
		},
		attributes: {
			name: 'Admin',
			username: 'a'
		}
	});
}

main();
