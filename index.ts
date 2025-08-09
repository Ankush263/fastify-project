import { main } from './src/app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : undefined;

const run = async () => {
	const server = await main();

	process.on('SIGINT', async () => {
		await server.close();
		process.exit(0);
	});

	process.on('SIGTERM', async () => {
		await server.close();
		process.exit(0);
	});

	server.listen(
		{
			port: PORT ?? 8000,
		},
		(err, address) => {
			if (err) {
				console.error(err);
				process.exit(1);
			}
			console.log(`Server listening at ${address}`);
		}
	);
};

void run();
