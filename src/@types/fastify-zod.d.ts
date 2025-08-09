import {
	FastifyInstance,
	RawServerDefault,
	RawRequestDefaultExpression,
	RawReplyDefaultExpression,
} from 'fastify';

declare global {
	type FastifyZodProvider = FastifyInstance<
		RawServerDefault,
		RawRequestDefaultExpression<RawServerDefault>,
		RawReplyDefaultExpression<RawServerDefault>
	>;
}
