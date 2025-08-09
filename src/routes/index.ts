import { registerV1Routes } from './v1';

export const registerRoutes = async (server: FastifyZodProvider) => {
	await server.register(
		async (v1server) => {
			await v1server.register(registerV1Routes);
		},
		{ prefix: '/api/v1' }
	);
};
