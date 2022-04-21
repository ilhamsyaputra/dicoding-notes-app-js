const Joi = require('joi');

const ImageHeaderSchema = Joi.object({
  'content-type': Joi.string().valid('image/png', 'image/avif', 'image/jpeg', 'image/apng', 'image/webp').required(),
}).unknown();

module.exports = { ImageHeaderSchema };
