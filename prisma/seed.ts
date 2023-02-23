import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();

type Article = {
	title: string;
	content: string;
};

const articles: Article[] = [
	{
		title: 'Example Article Title',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sequi quae modi dignissimos omnis. Dolore, voluptates laboriosam fuga nesciunt a id ipsa minima porro. Doloremque ratione sed ea ad harum.'
	},
	{
		title: 'Example Article Title 2',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sequi quae modi dignissimos omnis. Dolore, voluptates laboriosam fuga nesciunt a id ipsa minima porro. Doloremque ratione sed ea ad harum.'
	}
];

async function main() {
	for (const article of articles) {
		await db.article.create({
			data: {
				title: article.title,
				content: article.content
			}
		});
	}
}

main()
	.then(async () => {
		await db.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await db.$disconnect();
		process.exit(1);
	});
