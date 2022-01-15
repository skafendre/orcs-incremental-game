import * as winston from 'winston'

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    // defaultMeta: { service: 'user-service' }, interesting this
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: './logs/combined.log' }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.combine(
            winston.format.prettyPrint(),
            winston.format.colorize({ level: true }),
            winston.format.timestamp({ format: 'HH:mm:ss' }),
            winston.format.printf(
                (msg) =>
                    `${msg.timestamp} ${msg.level.padEnd(15, '-')} ${
                        msg.message
                    }`,
            ),
            winston.format.errors({ stack: true }),
        ),
    }));
}

export { logger }