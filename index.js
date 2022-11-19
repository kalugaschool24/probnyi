const token = "" ;
const TelegramApi = require('node-telegram-bot-api'); //02 подключаем node-telegram-bot-api

// 03 включаем самого обота

const bot = new TelegramApi(token, {polling: true});

//меню команд бота

bot.setMyCommands([

{command: '/start', description:'Приветствие' },
{command: '/menu', description:'Меню' },
{command: '/info', description:'О пользователе' }

]

)

//конфиг клавиатуры
const keyboard = [
   [
     {
       text: 'Хочу кота', // текст на кнопке
       callback_data: 'moreKeks' // данные для обработчика событий
     }
   ],
   [
       {
         text: 'Хочу песика',
         callback_data: 'morePes'
       }
   ],
   [
      {
         text: 'Хочу орла',
         callback_data: 'moreOrel'
      }
   ],

   [
      {
         text: 'Хочу пантеру',
         callback_data: 'morePantera'
      }
   ],

   [
       {
         text: 'Хочу проходить курсы',
         url: 'https://htmlacademy.ru/continue' //внешняя ссылка
       }
     ]
 ];

   
   //функция start
   
   const start = ()=>{
   
   bot.on('message', async (msg) => {
   
   const text = msg.text;
   
   const chatId = msg.chat.id;
   
   //bot.sendMessage(chatId, `Ты написал мне ${text}`);
   
   console.log(msg);
   
   if(text === '/start') {
   
   await bot.sendSticker(chatId, `https://chpic.su/_data/stickers/d/DinozavrTrax/DinozavrTrax_012.webp`)
   
   return bot.sendMessage(chatId, `Добро пожаловать!`)
   
   }
   
   if (text === '/info') {
   
   return bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`)
   
   }
   
   if (text === '/menu'){
   return bot.sendMessage(chatId, 'Привет, Друг! чего хочешь?', { // прикрутим клаву
      reply_markup: {
          inline_keyboard: keyboard
      }
   
  });

}
return bot.sendMessage(chatId, `Моя твоя не понимать`)



// обработчик событий нажатий на клавиатуру
bot.on('callback_query', (query) => {
  const chatId = query.message.chat.id;

  let img = '';

  if (query.data === 'moreKeks') { // если кот
      img = '909.png';
  }

  if (query.data === 'morePes') { // если пёс
      img = 'pes.png';
  }

  if (query.data === 'moreOrel') { // если орёл
     img = 'orel.png';
 }

 if (query.data === 'morePantera') { // если пантера
  img = 'pantera.png';
}

  if (img) {
      bot.sendPhoto(chatId, img, { // прикрутим клаву
          reply_markup: {
              inline_keyboard: keyboard
          }
      });
  } else {
      bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', { // прикрутим клаву
          reply_markup: {
              inline_keyboard: keyboard
          }
      });
  }
});








   
   });
   
   }
   
   start()










 