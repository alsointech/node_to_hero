const winston = require('winston');

const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
    level: 'info',
    
    // format: winston.format.json(),
    format: combine(
        timestamp(),
        json()
    ),
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

logger.add(new winston.transports.Console({
    format: winston.format.simple()
}));

// factory function
module.exports = function buildLogger(service) {
    return {
        log: (message) => {
            logger.log({
                level: 'info',
                message,
                service
            });
        },
        error: (message) => {
            logger.error({
                level: 'error',
                message,
                service,
            });
        }
    }
}

