var Mailjet = require('node-mailjet').connect('6a01afecdf37896254937c8be8abf680', '163377d761571e4de1e721b0b7bacf26');
console.log(Mailjet);
function handleError(err) {
  throw new Error(err.ErrorMessage);
}
function testEmail(text) {
  email = {};
  email.FromName = 'Ethan';
  email.FromEmail = 'ethan.bellora@antisocial.to';
  email.Subject = 'Test Email';
  email.Recipients = [{ Email: 'belloramail@gmail.com' }];
  email['Text-Part'] = text;

  Mailjet.post('send')
    .request(email)
    .catch(handleError);
}

testEmail('WOO!')