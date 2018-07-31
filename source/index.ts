import * as botBuilder from 'claudia-bot-builder';

// module.exports = botBuilder((request) => {
//   return 'hello world, ' + request.text;
// }, { platforms: ['telegram'] });

const telegramTemplate = botBuilder.telegramTemplate;

module.exports = botBuilder(() => new telegramTemplate.Photo('https://claudiajs.com/assets/claudiajs.png').get(), { platforms: ['telegram'] });
