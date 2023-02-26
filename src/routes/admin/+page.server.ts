import type { Actions, PageServerLoad } from './$types';
import { error, fail, redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async ({ locals }) => {
	const { user, session } = await locals.validateUser();
	if (!(user?.role === 'ADMIN' && session)) {
		throw error(401, 'Unauthorized');
	}

	return {
		articles: await prisma.article.findMany(),
		users: await prisma.user.findMany()
	};
};

export const actions: Actions = {
	createArticle: async ({ request, locals }) => {
		const { user, session } = await locals.validateUser();
		if (!(user && session)) {
			throw redirect(302, '/');
		}

		const { title, content } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>;

		try {
			await prisma.article.create({
				data: {
					title,
					content
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the article.' });
		}

		return {
			status: 201
		};
	},

	deleteArticle: async ({ url, locals }) => {
		const { user, session } = await locals.validateUser();
		if (!(user && session)) {
			throw redirect(302, '/');
		}
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			await prisma.article.delete({
				where: {
					id: Number(id)
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, {
				message: 'Something went wrong deleting your article'
			});
		}

		return {
			status: 200
		};
	}
};
