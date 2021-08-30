const express = require('express');

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { celebrate, Joi, errors } = require('celebrate');
const validator = require('validator');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const NotFoundError = require('./utils/not-found-error');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const {
  login,
  createUser,
  logout,
} = require('./controllers/users');

const { PORT = 3000 } = process.env;

const app = express();

const auth = require('./middlewares/auth');
const cors = require('./middlewares/cors');
const errorsHandler = require('./middlewares/error');

const method = (value) => {
  const result = validator.isURL(value);
  if (result) {
    return value;
  }
  throw new Error('URL validation err');
};
app.use(cors);

app.use(cookieParser());
mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use(requestLogger);
app.post('/signup', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().custom(method),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), createUser);
app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);
app.post('/signout', logout);
app.use(auth);

app.use('/', userRouter);
app.use('/', cardRouter);

// eslint-disable-next-line no-unused-vars
app.use((req, res) => {
  throw new NotFoundError('Запрашиваемый метод не существует');
});
app.use(errorLogger);
app.use(errors());
app.use(errorsHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
