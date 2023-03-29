import React from 'react'

const Test = () => {
    const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://google-web-search1.p.rapidapi.com/',
  params: {query: 'World Cup', limit: '20', related_keywords: 'true'},
  headers: {
    'X-RapidAPI-Key': '1aabc9467cmshd0be18d587bddcfp130452jsn51b26441d0d2',
    'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
  return (
    <div>Test</div>
  )
}

export default Test