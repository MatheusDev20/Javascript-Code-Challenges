const request = require('request');

const getCatFacts = (n) => new Promise((resolve, reject) => {
  request.get(`https://catfact.ninja/facts?limit=${n}`, (error, response, body) => {
    if (error) {
      let err = 'Ih man deu erro'
      reject(err)
    }
    console.log(body)
    const facts = response.body;
    resolve(facts);
  })
})

getCatFacts(50).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err)
})