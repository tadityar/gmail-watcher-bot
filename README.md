# gmail-watcher-bot
Telegram bot that watches your gmail inbox and sends you messages. These code are meant to be run on Google Cloud Functions. This repo follows is based off [this codelab](https://codelabs.developers.google.com/codelabs/intelligent-gmail-processing/index.html?index=..%2F..index#0). However, I find some of the information there outdated.

## What You Would Need

- Google Cloud Platform Account
These core are meant to be run on Google Cloud Function, so you should have a GCP account.

- Service Account
To test locally, you need a service account for your project. Please refer to [this page](https://cloud.google.com/docs/authentication/production#obtaining_and_providing_service_account_credentials_manually) to create your service account.

- Pub/Sub Topic
In the code we're calling the gmail `Users.watch` API to publish new messages to a Pub/Sub topic. Guide [here](https://cloud.google.com/pubsub/docs/quickstart-console#create_a_topic)

## Set Up

Set these env vars:
- `GCP_PROJECT` : Your GCP Project ID
- `GOOGLE_APPLICATION_CREDENTIALS` : Your service account credentials JSON
- `PUBSUB_TOPIC`: Pubsub topic you want to use

## Testing It Locally

### Authentication

```bash
git clone git@github.com:tadityar/gmail-watcher-bot.git
cd gmail-watcher-bot

cd auth_init
npm install
npm start

# in another terminal
cd auth_callback
npm install
npm start
```

visit http://localhost:8083 on your browser and complete the authentication. Make sure you authenticate with the email account you would like to
watch here.
