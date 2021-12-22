const axios = require('axios').default;
const nodemailer = require('nodemailer');

axios
  .get('https://www.dual-subtitles.co/')
  .then(res => {
    console.log(res.status === 200);
  })
  .catch(({ response }) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'salzburgrujvnun@gmail.com',
        pass: 'fmqblvbnggpyjydx',
      },
    });
    let errorMessage = '';
    if (response) {
      errorMessage = `服务器响应: ${response.status}`;
    } else {
      errorMessage = '服务器无响应!';
    }

    const mailOptions = {
      from: 'salzburgrujvnun@gmail.com',
      to: 'higogle1@gmail.com',
      subject: '⚠️ 网站异常提醒!',
      html: `<div style="color: red">
              <h2>${errorMessage}</h2>
              <b>${new Date().toLocaleDateString('zh')} ${new Date().toLocaleTimeString('zh')}</b>
            </div>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });
