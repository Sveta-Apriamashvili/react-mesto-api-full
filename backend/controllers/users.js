require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/user');
const NotFoundError = require('../utils/not-found-error');
const ForbiddenError = require('../utils/forbidden-error');
const UnauthorizedClientError = require('../utils/unauthorized-client-error');

const { NODE_ENV, JWT_SECRET } = process.env;

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(next);
};

const getUser = (req, res, next) => {
  const id = req.user._id;
  User.findById(id)
    .then((user) => {
      if (!user) throw new NotFoundError('Пользователя не существует');

      return res.send(user);
    })
    .catch(next);
};

const createUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, about, avatar, email, password: hash,
    }))
    .then((user) => res.send({
      name: user.name, about: user.about, avatar: user.avatar, email: user.email,
    }))
    .catch(next);
};

const updateUser = (req, res, next) => {
  const { name, about } = req.body;

  return User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    { new: true, runValidators: true },
  )
    .then((user) => {
      if (!user) throw new NotFoundError('Пользователя не существует');

      return res.send(user);
    })
    .catch(next);
};

const updateAvatar = (req, res, next) => {
  const avatar = req.body;

  return User.findByIdAndUpdate(req.user._id, avatar, { new: true, runValidators: true })
    .then((user) => {
      if (!user) throw new NotFoundError('Пользователя не существует');

      return res.send(user);
    })
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) throw new UnauthorizedClientError('Пользователя не существует');

      bcrypt.compare(password, user.password, ((error, isValid) => {
        if (error) throw new ForbiddenError(error);

        if (!isValid) throw new ForbiddenError('Неправильный пароль');

        if (isValid) {
          const token = jwt.sign(
            { _id: user._id },
             NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', 
            { expiresIn: '7d' }
          );
          res.cookie('jwt', token, {
            httpOnly: true,
            sameSite: true,
          }).send({
            name: user.name, about: user.about, avatar: user.avatar, email: user.email,
          });
        }
      }));
    })
    .catch(next);
};

const logout = (req, res, next) => {
  const token = jwt.sign(
    'jwt.token.revoked',
    'not-secret',
    { expiresIn: '1s' }
  );

  res.cookie('jwt', token, {
    httpOnly: true,
    sameSite: true,
  }).send({
    message: 'Сессия была успешно завершена'
  });

  next();
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  updateAvatar,
  login,
  logout,
};
