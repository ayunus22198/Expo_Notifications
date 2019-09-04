const router = require('express').Router();

router.post('/tokens', (req, res) => {
  controller.saveToken(req, res);
})

module.exports = router;
