import { registerRoutes } from './routes/index';
import { alphaNumericNanoid } from './lib/nanoid/index';
import fastify from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import {
	validatorCompiler,
	serializerCompiler,
} from 'fastify-type-provider-zod';
import { z } from 'zod';
import cookie from '@fastify/cookie';
import type { FastifyCookieOptions } from '@fastify/cookie';

export const main = async () => {
	const server = fastify({
		logger: true,
		trustProxy: true,
		genReqId: () => `req-${alphaNumericNanoid(14)}`,
		connectionTimeout: 90_000,
		ignoreTrailingSlash: true,
		pluginTimeout: 40_000,
	}).withTypeProvider<ZodTypeProvider>();

	server.setValidatorCompiler(validatorCompiler);
	server.setSerializerCompiler(serializerCompiler);

	server.addContentTypeParser(
		'application/scim+json',
		{ parseAs: 'string' },
		(_, body, done) => {
			try {
				const strBody = body instanceof Buffer ? body?.toString() : body;
				if (!strBody) {
					done(null, undefined);
					return;
				}
				const json: unknown = JSON.parse(strBody as string);
				done(null, json);
			} catch (error) {
				const err = error as Error;
				console.error(err);
			}
		}
	);

	const cookieSecret = z.string().min(32).parse(process.env.COOKIE_SECRET);

	try {
		await server.register<FastifyCookieOptions>(cookie, {
			secret: cookieSecret,
		});

		await server.register(registerRoutes);

		await server.ready();
		return server;
	} catch (error) {
		server.log.error(error);
		process.exit(1);
	}
};
