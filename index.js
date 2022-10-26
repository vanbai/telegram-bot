const TelegramApi = require('node-telegram-bot-api');

const token = '1646589910:AAET1Crp2PEsGs9s9hEj6Y7y1hBe0pkU55o';

const bot = new TelegramApi(token, {polling: true});

const start = () => {
    bot.setMyCommands([
        {command: '/start', description: 'Привествие'},
        {command: '/info', description: 'Что умеет бот'}
    ]);
    
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
        if (text === '/start') {
            return bot.sendMessage(chatId, `Добро пожаловать, ${msg.from.first_name}.`);
        }
    
        if (text === '/info') {
            return bot.sendMessage(chatId, 'Этот бот пока ничего не умеет');
        }
        return bot.sendMessage(chatId, 'Введи существующую комманду');
    });
};

start();

