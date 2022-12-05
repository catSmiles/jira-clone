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
    (req, res, next) => {
      if (['veVip', 'veThuong'].includes(req.query.ve)) {
        next();
      }
      res.status(403).json({ message: 'Access denied' });
    },
    (_req, res) => {
      res.json({ message: 'Successfully' });
    },
  );

  // start express server
  app.listen(3000, () => {
    console.log('server running on port 3000');
  });
};

const initializeApp = async (): Promise<void> => {
  // await establishDatabaseConnection();
  initializeExpress();
};

initializeApp();
