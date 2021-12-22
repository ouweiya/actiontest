// const fetch = require('node-fetch');
// console.log('fetch: ', fetch);

// console.log('Time', new Date().toLocaleTimeString());
// (async () => {
//   const data = await fetch('https://www.dual-subtitles.com/');
//   console.log(data.json());
// })();

// const https = require('https');

// const options = {
//   hostname: 'www.dual-subtitles.com',
//   port: 443,
//   // path: '/todos',
//   method: 'GET',
// };

// const req = https.request(options, res => {
//   console.log(`statusCode: ${res.statusCode}`);

//   res.on('data', d => {
//     process.stdout.write(d);
//   });
// });

// req.on('error', error => {
//   console.error(error);
// });

// req.end();
const axios = require('axios').default;

axios
  .get('https://www.dual-subtitles.co/2')
  .then(res => {
    console.log(res.status === 200);
  })
  .catch(({ response }) => {
    // console.log(response.status, data);
    if (response) {
      console.log('服务器响应:', response.status);
    } else {
      console.log('服务器无响应');
    }
  });
