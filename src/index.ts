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

  app.get(
    '/middleware',
    // (req, res, next) => { // this middleware function
    (req, res) => {
      if (['vevip', 'vethuong'].includes(req.query.ve.toLowerCase())) {
        req.face = 'Gach gach gach!!!';
        // next();  // this function invokes the next middleware function in the app
      }
      res.status(403).json({ message: 'Access denied' });
    },
    (req, res) => {
      res.json({ message: 'Successfully', face: req.face });
    },
    // How to use? - http://localhost:3000/middleware?ve=vethuong
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
