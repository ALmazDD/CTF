require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();
// для веб запросов
//CORS DOMEN CHECK 
app.use(cors());
//для парсинга формата json
app.use(express.json());
//COMPRESSION JSON
//для get файлов
app.use(express.static(path.resolve(__dirname, 'static')));
//для залива файлов в бд
app.use(fileUpload({}));
//api routing /api/....
app.use('/api', router);

//обработка ошибки
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
