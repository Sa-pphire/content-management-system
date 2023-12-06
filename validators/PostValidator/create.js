const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().required(),
  author: Joi.string().required(),
  content: Joi.string().required(),
  cover_image: Joi.string().optional(),
});

const create = (req, res, next) => {
  const { title, category, author, content, cover_image } = req.body;
  
  const { error } = schema.validate({ title, category, author, content, cover_image });

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ messages: errorMessages });
  }

  next();
};

module.exports = create;