const mongoose = require('mongoose');

const Token = new mongoose.Schema({
  token: {
    type: String
  }
});

module.exports('Token', Token);
