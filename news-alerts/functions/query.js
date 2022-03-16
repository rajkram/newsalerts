exports = function(payload) {
  const collection = context.services.get("mongodb-atlas-fts").db("news-alerts").collection("articles");

  	let arg = payload.query.arg;

  	return collection.aggregate([
  	  {$search: {
        compound: {
          must: {
            search: {
              path: 'summary',
              query: arg
            }
          },
          should: {
            search: {
              path: 'summary',
              query: arg
            }
          }
        }
      }},
      {$project: {
        title: 1,
        _id: 0,
        link: 1,
        media:1,
        summary:1,
        published_date: 1,
        score: {$meta: 'searchScore'}
      }},
      {$limit:
        15
      }]).toArray();
};