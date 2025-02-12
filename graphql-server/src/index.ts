import { createYoga } from "graphql-yoga";
import { createServer } from "node:http";

const port = Number(process.env.API_PORT) || 4000;

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({});

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

// Start the server and you're done!
server.listen(port, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
