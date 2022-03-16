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

# Roles and Responsibilities:
Don Davis - Charts, Search Index
Duffy Walsh - Data Ingestion, mLocust
Jeegar Ghodasara - PTO
Jess May - Data Ingestion
Paul Brant - Data API
Rajesh Ramamurthy - Front-end & Integration

# Demonstration Script

* _setup/installation steps_
* _step by step instructions on how to give the demonstration_
* _key points to emphasize at each point in the demonstration_
* _any tear down steps required to reset the demonstration so it is ready for the next time_

# Configure Atlas Environment

Log-on to your Atlas account (using the MongoDB SA preallocated Atlas credits system) and navigate to your SA project

In the project's Security tab, choose to add a new user called main_user, and for User Privileges specify Atlas admin (make a note of the password you specify)

Also in the Security tab, add a new IP Whitelist for your laptop's current IP address

Create an M10 based 3 node replica-set in an AWS region of your choice, running MongoDB version 4.2 (Atlas Full Text Search is only supported in version 4.2. It is available on all cluster sizes.)

Once the cluster has been full provisioned, in the Atlas console, create a new database called 'news-alerts' and a collection called 'articles'. Load the sample data in data.json located under the folder /data.

In the Atlas console, once the dataset has fully loaded, click the Collections button, and navigate to the articles collection. Under the Search tab, choose to Create Search Index. Keep all of the default options and select Create Index.

# Install and Configure Realm CLI Access

In a terminal session on your laptop, run npm install -g mongodb-realm-cli to install the realm-cli.
If you run into a permission denied error, you may need to run the following command in order to update permissions for your node_modules directory, according to this help ticket: sudo chown -R $USER /usr/local/lib/node_modules
Verify that the realm-cli is installed by executing the following command: realm-cli --version
Back in the Atlas console, click on Access Manager and select Project Access. On that page, navigate to the API Keys tab to create an API Key for your project and from the top right hand page of the console click Create API Key in order to create a new API Key
For the Description field, enter News Alerts and change the Project Permissions to Project Owner, and click Next.
Click Done or Save.




