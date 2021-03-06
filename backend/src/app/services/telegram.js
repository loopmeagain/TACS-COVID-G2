const { inspect } = require('util');

const logger = require('../logger');
const { Telegram } = require('../models');
const { databaseError } = require('../errors/builders');

exports.getTelegramBy = filters => {
  logger.info(`Attempting to get telegram with filters: ${inspect(filters)}`);
  return Telegram.findOne({
    where: {
      chatId: `${filters.chatId}`
    }
  }).catch(err => {
    /* istanbul ignore next */
    logger.error(inspect(err));
    /* istanbul ignore next */
    throw databaseError(`There was an error getting the telegram: ${err.message}`);
  });
};

exports.createTelegram = attributes => {
  logger.info(`Attempting to create or update telegram with attributes: ${inspect(attributes)}`);
  return Telegram.upsert(attributes);
};
