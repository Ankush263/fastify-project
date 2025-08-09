import { z } from 'zod';

export const registerUserRouter = async (server: FastifyZodProvider) => {
	server.route({
		method: 'GET',
		url: '/',
		schema: {
			response: {
				200: z.object({
					message: z.string(),
				}),
			},
		},
		handler: async (request, reply) => {
			return { message: 'hello Ankush' };
		},
	});
};
