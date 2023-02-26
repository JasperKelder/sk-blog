import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
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
