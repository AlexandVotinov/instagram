const Router = require('express');
const router = new Router();
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware, (req, res) => {
  res.send('home page')
})


module.exports = router;