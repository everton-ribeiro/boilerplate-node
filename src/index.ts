import Fastify, { FastifyInstance } from "fastify";

import { database } from "@shared/database";

const server: FastifyInstance = Fastify();

// Declare a route
server.get("/", async (request, reply) => {
	const createUser = await database.user.create({
		data: {
			email: "everton@teste.com",
			name: "Everton Ribeiro",
		},
	});

	reply.send({ user: createUser.id });
});

// Run the server!
server.listen({ port: 3000 }, err => {
	if (err) {
		console.log("Error");
		process.exit(1);
	}
});
