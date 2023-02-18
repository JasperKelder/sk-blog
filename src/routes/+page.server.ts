import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { auth } from '$lib/server/lucia';
import { redirect, type Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	return {
		articles: await prisma.article.findMany()
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
