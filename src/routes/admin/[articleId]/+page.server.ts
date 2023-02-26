import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params, locals }) => {
	const { user, session } = await locals.validateUser();
	if (!(user?.role === 'ADMIN' && session)) {
		throw error(401, 'Unauthorized');
	}

	const getArticle = async () => {
		const article = await prisma.article.findUnique({
			where: {
				id: Number(params.articleId)
			}
		});
		if (!article) {
			throw error(404, 'Article not found');
		}

		return article;
	};

	return {
		article: getArticle()
	};
};
