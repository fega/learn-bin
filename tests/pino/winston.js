const winston = require('winston');
winston.add(winston.transports.File, { filename: 'somefile.log' });
winston.info('hola')