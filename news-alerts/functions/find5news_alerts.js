exports = async function(arg){

  var axios = require('axios');
  var data = JSON.stringify({
    "collection": "articles",
    "database": "news-alerts",
    "dataSource": "News-Alerts",
    "projection": {
      "_id": 1,
      "title": 1,
      "summary": 1,
      "published_date": 1,
      "link": 1,
      "media" : 1
    },
    "filter": {
      "clean_url": "nasdaq.com"
    },
    "sort": {
      "published_date": -1
    },
    "limit": 5
  });

  var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-jegzr/endpoint/data/beta/action/find',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': '<data api key>'
    },
    data : data
  };

  const response = await axios(config);
  console.log(response.data);
  return response.data;
};
