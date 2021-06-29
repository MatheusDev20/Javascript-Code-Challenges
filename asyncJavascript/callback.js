const request = require('request');

const getCatFacts = (numberOfFacts, cb) => {
  request.get(`https://catfact.ninja/facts?limit=${numberOfFacts}`, (error, response, body) => {
    if (error) throw new Error(err + error)
    console.log(body)
    const facts = response.body;

    cb('Unable To get Cats Facts', facts)
  })
}

getCatFacts(1000, (err, facts) => {
  console.log(facts)
})
console.log('Continue to process something')