const Router = require('express');
const router = new Router();
const controller = require('../controllers/authController');




router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/logout', controller.logout);


router.get('/login', (req, res) => {
    res.render('login', {});
})
  
router.get('/registration', (req, res) => {
    res.render('registration', {});
})


module.exports = router;