const Joi = require('joi');

const schema = Joi.object({
  id: Joi.number().required(),
});

const get = (req, res, next) => {
  const { id } = req.params;

  const { error } = schema.validate({ id });

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ messages: errorMessages });
  }

  next();
};

module.exports = get;