import * as https from 'https';
import * as querystring from 'querystring';
import md5 = require('md5');

export const translate = (word) => {

  const appid = '???'
  const appSecret = '???'
  const salt = Math.random()
  const sign = md5(appid + word + salt + appSecret)

  const query: string = querystring.stringify({
    q: word,
    from: 'en',
    to: 'zh',
    appid: appid,
    salt: salt,
    sign: sign,
  });

  const options = {
    hostname: 'api.fanyi.baidu.com',
    port: 443,
    path: '/api/trans/vip/translate?' + query,
    method: 'GET',
  };

  const req = https.request(options, (res) => {
    res.on('data', (d) => {
      console.log('状态码:', res.statusCode);
      console.log('请求头:', res.headers);
      process.stdout.write(d);
    });
  });

  req.on('error', (e) => {
    console.error(e);
  });
  req.end();
};