const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const jsonParser = express.json();
const cors = require('cors');
const mongoose = require('mongoose');
// const apiKey = require('./config');
const path = require('path');
var port = process.env.PORT || 3001;

const Schema = mongoose.Schema;

const feedBackScheme = new Schema({
  authorName: String,
  residenceCity: String,
  feedbackText: String
},
  { versionKey: false }
);
const Feedback = mongoose.model("Feedback", feedBackScheme);

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.connect(process.env.MLAB_URI, { useNewUrlParser: true },
  function (err) {
    if (err) return console.log("my error: " + err);

    app.listen(port, function () {
      console.log(process.env.PORT);
      console.log("Сервер ожидает подключения...");
    });
  });

app.use(cors());
app.options('*', cors());

let options = {
  service: 'SendGrid',
  auth: {
    api_key: process.env.API_KEY
  }
};

let client = nodemailer.createTransport(sgTransport(options));

const cutPotentialDangerousChars = (data) => {
  let potentialDangerousChars = /[<>{}]/gi;
  for (let key in data) {
    let newStr = data[key].toString().replace(potentialDangerousChars, " ");
    data[key] = newStr;
  }
};

app.post('/send', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);

  let dataObj = req.body.items;

  let itemsInfo = dataObj.map(goods => {
    if (goods.item == "Стул") {
      if (goods.colorLegChair) {
        let resString = `
          <div>
            <p>Наименование: ${goods.item}</p>
            <p>Цвет стула: ${goods.color}</p>
            <p>Цвет ножек: ${goods.colorLegChair}</p>
            <p>Количество: ${goods.count}</p>
          </div>
        `;
        return resString;
      } else {
        let resString = `
          <div>
            <p>Наименование: ${goods.item}</p>
            <p>Цвет стула: ${goods.color}</p>
            <p>Количество: ${goods.count}</p>
          </div>
        `;
        return resString;
      }

    } else {
      let resString = `
      <div>
        <p>Наименование: ${goods.item}</p>
        <p>Цвет: ${goods.color}</p>
        <p>Количество: ${goods.count}</p>
      </div>
    `;
      return resString;
    }
  });

  let email = {
    from: 'stul-winnie@yandex.ru',
    to: 'winnie-stul@mail.ru',
    subject: 'Заказ с сайта',
    text: 'Hello world',
    html: `<div>
    <h2>Поступил заказ с сайта</h2>
      ${itemsInfo}
      <p>--------------------</p>
      <p><b>Сумма заказа: ${req.body.totalAmount} руб.</b></p>

    <h3>Информация о заказчике</h3>
    <p>Имя: ${req.body.firstName}</p>
    <p>Фамилия: ${req.body.secondName}</p>
    <p>Номер телефона: ${req.body.phoneNumber}</p>
    <p>E-mail: ${req.body.mail}</p>
    <b>Адрес доставки:</b>
    <p>Город: ${req.body.city}</p>
    <p>Улица: ${req.body.street}</p>
    <p>Дом: ${req.body.houseNumber}</p>
    <p>Квартира: ${req.body.flatNumber}</p>
    <p>Дата доставки: ${req.body.deliveryDate}</p>
    <p>Способ доставки: ${req.body.deliveryMethod}</p>
    <p>Комментарии к заказу: ${req.body.comments}</p>
    </div>
    `
  };

  client.sendMail(email, function (err, info) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      res.send(info);
      console.log('Message sent: ' + info);
    }
  });
});

app.post('/leave-feedback', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);

  let dataObj = req.body;
  cutPotentialDangerousChars(dataObj);

  Feedback.create({
    authorName: dataObj.authorName,
    residenceCity: dataObj.residenceCity,
    feedbackText: dataObj.feedbackText
  }).then(feedback => {
    let email = {
      from: 'stul-winnie@yandex.ru',
      to: 'winnie-stul@mail.ru',
      subject: 'Новый отзыв на сайте',
      text: `На Вашем сайте появился новый отзыв от ${feedback.authorName} из ${feedback.residenceCity}:
      "${feedback.feedbackText}"`
    };
    client.sendMail(email, function (err, info) {
      if (err) {
        console.log(err);
        res.send(err);
      }
      else {
        res.send(info);
        console.log('Message sent: ' + info);
      }
    });
  }).catch(err => console.log(err, 'feedback not created'));


});

app.get('/get-feedbacks', (req, res) => {
  Feedback.find({}, (err, feedbacks) => {
    if (err) return console.log(err);

    if(feedbacks) {
      console.log(feedbacks);
      res.send(feedbacks);
    } 
  });
});

app.delete("/api/delete/feedbacks", function (req, res) {
  Feedback.deleteMany({ authorName: { $exists: true } }, function (err, data) {
    if (err) return console.log(err);
    res.send(data);
  });
});



