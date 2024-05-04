import dotenv from 'dotenv';
dotenv.config();

import http from 'http';

import createApp from './app';
import config from './config';

const app = http.createServer(createApp());

app.listen(config.port, () => {
  console.log(`Server running in port ${config.port}`);
});
