import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const name = 'a';
		const username = 'a';
		const password = 'a';

		await auth.createUser({
			key: {
				providerId: 'username',
				providerUserId: username,
				password
			},
			attributes: {
				name,
				username
			}
		});
	} catch (err) {
		console.error(err);
		return fail(400, { message: 'Could not register user' });
	}
	throw redirect(302, '/login');
};

//TODO: move to seed script
