// This function is the webhook's request handler.
exports = function(payload) {
  const collection = context.services.get("mongodb-atlas-fts").db("news-alerts").collection("articles");


    let arg = payload.query.arg + "*";

    return collection.aggregate(
      //PASTE AGG PIPELINE CODE HERE
      [
        {$search: {
          "index": "ix_autocomplete",
            "autocomplete": {
              "query": arg,
              "path": "title",
              "tokenOrder": "any"
            }
        }},
        {$project: {
          title: 1,
          _id: 0,
          link: 1,
          author: 1
        }},
        {$limit: 15}
      ]
    ).toArray();
};
