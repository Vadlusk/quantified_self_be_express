const fetch = require('node-fetch');

class YummlyService {
  static search(name) {
    return fetch(`https://api.yummly.com/v1/api/recipes?q=${name}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Yummly-App-ID': process.env.YUMMLY_ID,
        'X-Yummly-App-Key': process.env.YUMMLY_KEY
      }
    })
      .then(res => res.json())
      .then(info => info.matches);
  }
}

module.exports = YummlyService;
