import express from 'express';
import 'module-alias/register';

// import createDatabaseConnection from 'database/createConnection';

// establish database connection
// const establishDatabaseConnection = async (): Promise<void> => {
//   try {
//     await createDatabaseConnection();
//     console.log('db connect successful');
//   } catch (e) {
//     console.log(e);
//   }
// };

// initialize express
const initializeExpress = (): void => {
  // create and setup express app
  const app = express();
  app.use(express.json());

  app.post('/title', (_req, res) => {
    res.json({ name: 'Test User' });
    // test one Thunder Client
  });

  app.get(
    '/middleware',
    (req, res, next) => {
      if (['vevip', 'vethuong'].includes(req.query.ve)) {
        req.face = 'Gach gach gach!!!';
        next();
      }
      res.status(403).json({ message: 'Access denied' });
    },
    (req, res) => {
      res.json({ message: 'Successfully', face: req.face });
    },
  );

  // start express server
  app.listen(3000, () => {
    console.log('server running on port 3000');
  });
};

// eslint-disable-next-line @typescript-eslint/require-await
const initializeApp = async (): Promise<void> => {
  // await establishDatabaseConnection();
  initializeExpress();
};

initializeApp();
