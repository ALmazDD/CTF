const sequelize = require('../db');
const { DataTypes } = require('sequelize');

//User таблица
const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'user' },
});

//toSolve решить в будущем
const ToSolve = sequelize.define('toSolve', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

//toSolve_challenge решить в будущем соединяющая таблица
const ToSolve_challenge = sequelize.define('toSolve_challenge', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

//challege таблица
const Challenge = sequelize.define('challenge', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  flag: { type: DataTypes.STRING, allowNull: false },
  solvedTask: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  img: { type: DataTypes.STRING, allowNull: false },
});

//type таблица
const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

//difficulty таблица
const Difficulty = sequelize.define('difficulty', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

//solved таблица
const Solved = sequelize.define('solved', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  solved: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
});

//Challenge_info таблица
const Challenge_info = sequelize.define('challenge_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

//Прописываем связи таблиц
User.hasOne(ToSolve);
ToSolve.belongsTo(User);

User.hasMany(Solved);
Solved.belongsTo(User);

ToSolve.hasMany(ToSolve_challenge);
ToSolve_challenge.belongsTo(ToSolve);

Type.hasMany(Challenge);
Challenge.belongsTo(Type);

Difficulty.hasMany(Challenge);
Challenge.belongsTo(Difficulty);

Challenge.hasMany(Solved);
Solved.belongsTo(Challenge);

Challenge.hasMany(ToSolve_challenge);
ToSolve_challenge.belongsTo(Challenge);

Challenge.hasMany(Challenge_info, { as: 'description' });
Challenge_info.belongsTo(Challenge);

module.exports = {
  User,
  ToSolve,
  ToSolve_challenge,
  Challenge,
  Type,
  Difficulty,
  Solved,
  Challenge_info,
};
