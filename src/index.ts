import Fastify, { FastifyInstance } from "fastify";

import { sum } from "@src/sum";

const server: FastifyInstance = Fastify();

// Declare a route
server.get("/", (request, reply) => {
	reply.send({ hello: "world" });
});

console.log(sum(1, 2));

// Run the server!
server.listen({ port: 3000 }, err => {
	if (err) {
		console.log("Error");
		process.exit(1);
	}
});
