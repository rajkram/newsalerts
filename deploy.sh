#!/bin/bash
echo "Logging in to the Realm CLI..."

API_KEY="${1}"
PRIVATE_API_KEY="${2}"
CLUSTER_NAME="${3}"

realm-cli login --api-key=$API_KEY --private-api-key=${PRIVATE_API_KEY}
echo "Logged in as `realm-cli whoami`"

sed -i.bak -e 's/\("clusterName":\)\(.*\)/\1"\'$CLUSTER_NAME'\",/' news-alerts/services/mongodb-atlas-fts/config.json && rm news-alerts/services/mongodb-atlas-fts/config.json.bak

echo "Importing your app onto the Realm runtime..."

realm-cli import --local news-alerts --include-hosting
