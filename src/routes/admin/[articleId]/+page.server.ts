import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { error, fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';

export const load: PageServerLoad = async ({ params, locals }) => {
	const { user, session } = await locals.validateUser();
	if (!(user && session)) {
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

export const actions: Actions = {
	logout: async ({ locals }) => {
		const session = await locals.validate();
		if (!session) {
			throw redirect(302, '/');
		}

		await auth.invalidateSession(session.sessionId);
		locals.setSession(null);

		throw redirect(302, '/');
	},

	updateArticle: async ({ request, params, locals }) => {
		const { user, session } = await locals.validateUser();
		if (!(user && session)) {
			throw error(401, 'Unauthorized');
		}

		const { title, content } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>;

		try {
			await prisma.article.findUniqueOrThrow({
				where: {
					id: Number(params.articleId)
				}
			});

			await prisma.article.update({
				where: {
					id: Number(params.articleId)
				},
				data: {
					title,
					content
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not update article' });
		}

		throw redirect(302, '/admin');
	}
};
