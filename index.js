var Telegram = require("node-telegram-bot-api");
var token = "6427776134:AAEXVE835pPoGyXPQaZZCS7mDtvpyKLh_5U";
var opt = {polling: true};

var bot = new Telegram(token, opt);

bot.onText( "/\/start/" , function(msg, match){
  var chatId = msg.chat.id;
  var resp = "Welcome to the bot!";
  bot.sendMessage(chatId, resp);
});