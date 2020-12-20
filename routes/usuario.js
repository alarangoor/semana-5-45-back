const routerx = require('express-promise-router');
const usuarioController = require('../controllers/UsuarioController');
const auth = require('../middlewares/auth');

const router = routerx();

router.post('/login', usuarioController.login);

module.exports = router;
