const models = require('../models');
const Categoria = require('../models').Categoria;

module.exports = {
    add: async (req, res, next) => {
        try {
            const reg = await models.Articulo.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    list: async (req, res, next) => {
        try {
            const reg = await models.Articulo.findAll({
                include: [{
                    model: Categoria,
                    as: 'categoria'
                }],
            });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    update: async (req, res, next) => {
        try {
            console.log(req.body);
            const reg = await models.Articulo.update({ categoriaId: req.body.categoria, codigo: req.body.codigo, nombre: req.body.nombre, descripcion: req.body.descripcion, precio_venta: req.body.precio_venta, stock: req.body.stock }, { where: { id: req.body.id } });

            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    activate: async (req, res, next) => {
        try {
            const reg = await models.Articulo.update({ estado: 1 }, { where: { id: req.body.id } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    },
    deactivate: async (req, res, next) => {
        try {
            const reg = await models.Articulo.update({ estado: 0 }, { where: { id: req.body.id } });
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message: 'Ocurrió un error'
            });
            next(e);
        }
    }
}