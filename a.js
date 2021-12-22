const fs = require('fs');
// require('dns').lookup(require('os').hostname(), function (err, add, fam) {
//   console.log('addr: ' + add);
// });
console.log('File', fs.readdirSync('./'));

const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    if (net.family === 'IPv4' && !net.internal) {
      if (!results[name]) {
        results[name] = [];
      }
      results[name].push(net.address);
    }
  }
}
console.log('IP', JSON.stringify(results));
