import 'module-alias/register';
import 'dotenv/config';
import 'reflect-metadata';

import express from 'express';
import cors from 'cors';

import createDatabaseConnection from 'database/createConnection';
import { addRespondToResponse } from 'middleware/response';
import { authenticateUser } from 'middleware/authentication';
import { handleError } from 'middleware/errors';
import { RouteNotFoundError } from 'errors/customErrors';

import { attachPublicRoutes, attachPrivateRoutes } from './routes';

// establish database connection
const establishDatabaseConnection = async (): Promise<void> => {
  try {
    console.log('create connection');
    await createDatabaseConnection();
    console.log('db connect successful');
  } catch (error) {
    console.log(error);
  }
};

// initialize express
const initializeExpress = (): void => {
  // create and setup express app
  const app = express();

  // use middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(addRespondToResponse);

  // using Thunder Client run: http://localhost:3032/authentication/guest - with post method (To create data)
  attachPublicRoutes(app);

  app.use('/', authenticateUser);

  attachPrivateRoutes(app);

  // handle error route not found!
  app.use((req, _res, next) => next(new RouteNotFoundError(req.originalUrl)));

  // handle error
  app.use(handleError);

  // start express server
  app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
  });
};

const initializeApp = async (): Promise<void> => {
  await establishDatabaseConnection();
  initializeExpress();
};

initializeApp();
