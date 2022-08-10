const enesv = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('message',enesv('message'));
};
