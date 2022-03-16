**Project** : News Alerts  
**Team Number** : 4  
**Team Name** : Team Done Throwing up by 9  
**Demonstration Video** : 

# Overview
This application accesses recent news alerts according to search terms inputted by the user.
Both news article titles and summaries are searched to ensure all relevant results. Other useful features include pulling the 5 most recent articles so users can stay updated, as well as a MongoDB Charts integration to visually highlight interesting news trends globally.

# Justification
Inspiration for this application originated from a Morgan Stanley use case. News articles must be pulled manually, slowing down news alerts to consumers, as well as prevents the capability of real-time analytics.
Moving to the cloud enables efficient scalability, reduces costs, and importantly, allows the business to focus on applications and analytics rather than database maintenance and other non-differentiating tasks.

# Competitive Differentiator Showcase:
* Developer productivity
* Scalability

# Detailed Application Overview:
The app enable users to get 5 most news articles, search using keywords, and use charts for news related statistics. The front end calls an https endpoint to invoke a function that uses data API to pull 5 most recent news articles. It enable users to search for articles based on keywords like 'ukraine', 'inflation' etc.,It also renders some statistics on a dashboard containing different charts.

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

# Setup Instructions

# Configure Atlas Environment

* Log-on to your Atlas account (using the MongoDB SA preallocated Atlas credits system) and navigate to your SA project
* In the project's Security tab, choose to add a new user called main_user, and for User Privileges specify Atlas admin (make a note of the password you specify)
* Also in the Security tab, add a new IP Whitelist for your laptop's current IP address
* Create an M10 based 3 node replica-set in an AWS region of your choice, running MongoDB version 4.2 (Atlas Full Text Search is only supported in version 4.2. It is available on all cluster sizes.)
* Once the cluster has been full provisioned, in the Atlas console, create a new database called 'news-alerts' and a collection called 'articles'. Load the sample data in data.json located under the folder /data.
* In the Atlas console, once the dataset has fully loaded, click the Collections button, and navigate to the articles collection. Under the Search tab, choose to Create Search Index. Keep all of the default options and select Create Index.

# Install and Configure Realm CLI Access

* In a terminal session on your laptop, run `npm install -g mongodb-realm-cli` to install the [realm-cli](https://www.npmjs.com/package/mongodb-realm-cli).
* If you run into a `permission denied` error, you may need to run the following command in order to update permissions for your `node_modules` directory, according to [this help ticket](https://jira.mongodb.org/browse/HELP-12025): `sudo chown -R $USER /usr/local/lib/node_modules`
* Verify that the `realm-cli` is installed by executing the following command: `realm-cli --version`
* Back in the Atlas console, click on Access Manager and select Project Access. On that page, navigate to the [API Keys](https://docs.atlas.mongodb.com/configure-api-access/#create-an-api-key-for-a-project) tab to create an API Key for your project and from the top right hand page of the console click Create API Key in order to create a new API Key
* For the Description field, enter __News Alerts__ and change the Project Permissions to Project Owner, and click Next:
* Click __Done or Save__.

# Deploy Realm application__

* The exported version of the Realm application exists in the sub-folder `news-alerts`.  In the base folder of this proof, deploy the `news-alerts` application into Realm, in the same project as your Atlas cluster, by running the `deploy.sh` script - execute the script as shown below, first replacing the two parameters with the public & private keys you just saved, and for the 3rd parameter, the name of the Atlas cluster:

		./deploy.sh <PUBLIC_KEY> <PRIVATE_KEY> <ATLAS_CLUSTER_NAME>

&nbsp;&nbsp;&nbsp;_Example_:

        ./deploy.sh nrzwypmv ee038461-e4a1-4ab9-950c-35aedf1986g8 TestCluster

* You will first be authenticated to the Realm CLI.  If you already have an existing session running with access to the project, you do not need to de-authenticate the existing session.
* Select the project name where you have deployed the Atlas cluster.  Hit Enter to choose the project highlighted.
* Type `y` when prompted with `would you like to create a new app? [y/n]`
* Press Enter to use the default app name
* The Realm Runtime currently [works in the following AWS regions](https://docs.mongodb.com/realm/admin/deployment-models-and-regions/#cloud-deployment-regions): Virginia (`US-VA`), Oregon (`US-OR`), Ireland (`IE`), or Sydney (`AU`).  Type in the code for the region closest to your Atlas cluster.
* Hit Enter to choose [a `LOCAL` deployment](https://docs.mongodb.com/realm/admin/deployment-models-and-regions/#deployment-models), the default configuration for this application.  A `LOCAL` deployment will deploy the Realm application in the specific [cloud region](https://docs.mongodb.com/realm/admin/deployment-models-and-regions/#stitch-regions) specified in the previous step.  Conversely, a `GLOBAL` deployment will host the Realm application in every region that Realm currently supports.
* Select development for app environment.
* The `realm-cli` will then import and deploy your application onto the Realm runtime. Note - It will take few minutes to deploy the application.

# Create Data API Key

* Click Data API on the left nav bar and click Create API Key on the top right corner to create a new key
* Enter any valid key name and click Generate API Key.
* Write the api-key value down and store is securely.
* Edit find5news_alerts.js file located under /news-alerts/functions and update 'api-key' under config to the key value that you noted in the previous step.

# Update HTTPS Endpoint URLs

* The deployment will create 3 https endpoint and each will be associated with a function.  
* Click Realm, select the deployed app news-alerts and click HTTPS Endpoints on the left nav bar.
* Select the function find5new_alerts and copy the https endpoint url.
* Edit index.html under /hosting/files and paste the copied url inside getTopFiveNews() for url value. 
* Select the function query and copy the https endpoint url.
* Edit search.html under /hosting/files and paste the copied url for query_endpoint_url variable.
* Select the function typeahead and copy the https endpoint url.
* Edit search.html under /hosting/files and paste the copied url for the URl parameter inside findNews() function.
* Deploy the application again by running `sh deploy.sh <PUBLIC_KEY> <PRIVATE_KEY> <ATLAS_CLUSTER_NAME>`.

# Execution

__1. Open the index web page__

* Navigate to the __News_alerts__ Realm application
* In the Realm left-hand navigation menu, select _Hosting_
* You should see the `index.html` page listed in the table.
* Copy the URL shown at the top of the hosting page (i.e. for example - news-alerts-eizjt.mongodbstitch.com)

* Open up an incognito browser window, appending `index.html` to the URL
(__Note__: The _Open In Browser_ menu item only fetches the selected asset and does not preserve the links to the other assets).

__2. Test out search queries__

Before trying out search queries from the application, create an autocomplete index so that the fields that you intend to query are indexed with the autocomplete data
type in the collection's index definition. [Autocomplete](https://docs.atlas.mongodb.com/atlas-search/autocomplete/)

Name the index as `ix_autocomplete`. Copy the following index definition and paste it in the JSON editor as shown in the screenshow below and save the index.
<pre>
	{
	"mappings": {
		"dynamic": false,
		"fields": {
		"title": [
			{
			"foldDiacritics": false,
			"maxGrams": 7,
			"minGrams": 3,
			"tokenization": "nGram",
			"type": "autocomplete"
			}
		]
		}
	}
	}
</pre>



