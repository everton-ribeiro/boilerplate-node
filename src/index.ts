import Fastify, { FastifyInstance } from "fastify";

const server: FastifyInstance = Fastify();

// Declare a route
server.get("/", (request, reply) => {
	reply.send({ hello: "world" });
});

// Run the server!
server.listen({ port: 3000 }, err => {
	if (err) {
		console.log("Error");
		process.exit(1);
	}
});
