import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { error, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';

export const load: PageServerLoad = async ({ params }) => {
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

export const actions: Actions = {
	logout: async ({ locals }) => {
		const session = await locals.validate();
		if (!session) {
			throw redirect(302, '/');
		}

		await auth.invalidateSession(session.sessionId);
		locals.setSession(null);

		throw redirect(302, '/');
	}
};
