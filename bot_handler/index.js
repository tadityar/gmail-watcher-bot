const {Datastore} = require('@google-cloud/datastore');
const TelegramBot = require('node-telegram-bot-api');

const datastoreClient = new Datastore();

const TOKEN = process.env.TELEGRAM_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(TOKEN);
const HTTP_TRIGGER_URL = process.env.HTTP_TRIGGER_URL;

bot.setWebHook(HTTP_TRIGGER_URL); // Set webhook token to the function url

exports.botHandler = (req, res) => {
    console.log('Triggered.');
    const message = req.body.message;
    const chatId = message.chat.id
    
    if (!message.text) {
        console.log('no text found in message')
        res.sendStatus(200);
        return;
    }

    if (message.text.startsWith("/identifychat")) {
        console.log('attempting to store chatId to datastore')
        // The Cloud Datastore key for the new entity
        const taskKey = datastoreClient.key(['telegramChatID', chatId]);
        const task = {
            key: taskKey,
            data: {},
        };
    
        datastoreClient.save(task).catch(err => {
            console.error(err);
            res.status(500).send(err.message);
            return Promise.reject(err);
        });
    
        console.log("sending message to telegram")
        bot.sendMessage(chatId, 'chatID has been saved to datastore');
        res.sendStatus(200);
        return;
    }

    bot.sendMessage(chatId, 'command not recognized by bot');
    res.sendStatus(200);
};
