import express from 'express';

const createApp = (): express.Application => {
  const app = express();

  app.get('/', (_req, res) => {
    return res.json({ message: 'Hello World X2' });
  });

  return app;
};

export default createApp;
