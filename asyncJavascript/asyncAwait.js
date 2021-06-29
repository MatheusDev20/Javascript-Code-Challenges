const request = require('request');

async function getCatFacts(n) {
  try {
    request.get(`https://catfact.ninja/facts?limit=${n}`, (error, response, body) => {
    const facts = response.body
    return facts;
    })
  }
  catch (error) {
    throw new Error(error);
  }
}
getCatFacts(60).then((res) => {
  console.log(res);
}).catch((e) => {
  console.log(e)
})
