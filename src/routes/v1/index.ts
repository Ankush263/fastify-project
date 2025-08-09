import { registerUserRouter } from './user-router';

export const registerV1Routes = async (server: FastifyZodProvider) => {
	await server.register(registerUserRouter, { prefix: '/user' });
};
