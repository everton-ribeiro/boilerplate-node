
import Fastify, { FastifyInstance} from 'fastify';

const server: FastifyInstance = Fastify();


// Declare a route
server.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
server.listen({ port: 3000 }, function (err, address) {
  if (err) {
    console.log('Error')
    process.exit(1)
  }
})
