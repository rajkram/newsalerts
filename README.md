**Project** : News Alerts  
**Team Number** : 4  
**Team Name** : The Dream Team  
**Demonstration Video** : 

# Overview
This News Alert application
This application accesses recent news alerts according to search terms inputted by the user.
Both news article titles and summaries are searched to ensure all relevant results. Other useful features include pulling the 5 most recent articles so users can stay updated, as well as a MongoDB Charts integration to visually highlight interesting news trends globally.

# Justification
Inspiration for this application originated from a Morgan Stanley use case. News articles must be pulled manually, slowing down news alerts to consumers, as well as prevents the capability of real-time analytics.
Moving to the cloud enables efficient scalability, reduces costs, and importantly, allows the business to focus on applications and analytics rather than database maintenance and other non-differentiating tasks.

# Competitive Differentiator Showcase:
Developer productivity
Scalability

# Detailed Application Overview:
The app enable users to get top 5 news articles, search using keywords, and use charts for news related statistics. The front end calls an https endpoint to invoke a function that uses data API to pull top 5 recent news articles. It enable users to search for articles based on keywords like 'ukraine', 'inflation' etc.,It also renders some statistics on a dashboard containing different charts.

# Application Description:
A MongoDB Realm application that pulls global news articles via Data API. The homepage displays the 5 most recent articles and integrates with Charts. Users may also navigate to a search page where they can find articles based on off inputted terms using Atlas Search with autocomplete and fuzzy enabled.

# MongoDB Products/Components/Features:
Atlas Search
Charts
Data API
App Services - Functions, Http endpointm realm-cli for deployment
Uses mLocust to demonstrate news metadata at scale
