# gmail-watcher-bot
Telegram bot that watches your gmail inbox and sends you messages. These code are meant to be run on Google Cloud Functions.

## Set Up

Make sure you set up these env vars:
- `GCP_PROJECT` : Your GCP Project ID
- `GOOGLE_APPLICATION_CREDENTIALS` : Your service account credentials JSON
- `PUBSUB_TOPIC`: Pubsub topic you want to use

## Testing It Locally

### Authentication

```bash
cd auth_init
npm start

# in another terminal
cd auth_callback
npm start
```

visit http://localhost:8083 on your browser and complete the authentication
