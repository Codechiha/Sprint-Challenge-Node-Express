console.log('server.js');

const express = require('express');

const cors = require('cors');

const morgan = require('morgan');

const helmet = require('helmet');

const actionRouter = require('./actions/actionRouter.js');

const projectRouter = require('./projects/projectRouter.js');

const server = express();

//middleware
server.use(express.json());

server.use(cors());

server.use(morgan());

server.use(helmet());

server.use('/actions', actionRouter);

server.use('/projects', projectRouter);

//routes

module.exports = server;