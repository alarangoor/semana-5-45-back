const routerx = require('express-promise-router');
const categoriaRouter = require('./articulo');



const router = routerx();

router.use('/articulo', articuloRouter);

module.exports = router;