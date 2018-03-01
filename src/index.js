import Botkit from "botkit";

const controller = Botkit.facebookbot({
    access_token: process.env.FB_PAGE_ACCESS_TOKEN,
    verify_token: process.env.VERIFY_TOKEN,
});

const bot = controller.spawn({});

controller.setupWebserver(process.env.PORT || 5000,function(err,webserver) {
    controller.createWebhookEndpoints(controller.webserver, bot, function() {
        console.log('This bot is online!!!');
    });
});

controller.on('facebook_optin', function(bot, message) {

    bot.reply(message, 'Welcome to my app!');

});

// user said hello
controller.hears(['hello'], 'message_received', function(bot, message) {

    bot.reply(message, 'Hey there.');

});
