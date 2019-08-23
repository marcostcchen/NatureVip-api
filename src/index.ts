import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import * as cors from "cors";
import routes from "./routes";
import * as path from "path";
import * as graphqlHTTP from "express-graphql";
import { buildSchema } from "type-graphql";
import { ProductListResolver } from "./graphql/api/Product/ProductListResolver";

//Connects to the Database -> then starts the express
createConnection()
  .then(async connection => {
    // Create a new express application instance
    const app = express();

    // Call midlewares
    app.use(cors());
    app.use(helmet());
    app.use(bodyParser.json());

    //Set all routes from routes folder
    app.use("/", routes);

    // create schema from annotated class
    const schema = await buildSchema({
      resolvers: [ProductListResolver],
      emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    });

    app.use('/graphiql', graphqlHTTP({
      schema,
      graphiql: true,
    }));

    app.listen(4000);
    console.log('Running a GraphQL API server at localhost:4000/graphiql');
  })
  .catch(error => console.log(error));