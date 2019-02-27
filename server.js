const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const jsonParser = express.json();
const cors = require('cors');

app.use(express.static(__dirname + "/src"));

app.use(cors());
app.options('*', cors());

let options = {
  service: 'SendGrid',
  auth: {
    api_key: "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"
  }
};
let client = nodemailer.createTransport(sgTransport(options));

app.post('/send', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);

  let itemsInfo = req.body.items.map(goods => {
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
})

app.listen(3001, function () {
  console.log("Сервер ожидает подключения...");
});

