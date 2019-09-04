const Token = require('./model');

exports.saveToken = (req, res) => {
  const { token } = req.body;
  let token = new Token({
    token: token
  });
  token.save().then((token) => {
    if(token) {
      return res.status(201).json({'Success': token});
    } else {
      return res.status(404).json({'Error': 'Error'});
    }
  })
}
