const Operation = require('../models/Operations');

exports.getOperations = async (req, res) => {
    const operations = await Operation.findAll({
        where: {
            userId: req.params.userId
        },
        order: [
            ['createdAt', 'DESC'],
        ],
        limit: 10
    });
    res.json(operations);
}

exports.newOperations = async (req, res) => {
    const { name, price, date, type, userId } = req.body; 

    const operation = await Operation.create({name, price, date, type, userId});
        res.json(operation);
        //.then(() => )
        //.catch(err => res.status(404).send({message: err}))
    
}

exports.updateOperations = async (req, res) => {

  const { name, price, date } = req.body; 

  const operation =  await Operation.update({ name: name, price: price, date: date}, {
        where: {
            id: req.params.id
        }
    });

    res.json(operation);
    
}

exports.deleteOperations = async (req, res) => {
    
   const operation = await Operation.destroy({
        where: {
            id: req.params.id
        }
      });

      res.json(operation);
}

exports.getOperationById = async (req, res) => {

    const operation = await Operation.findOne({
        where: {
            id: req.params.id
        }
    });

    res.json(operation);
}

exports.getPrices = async (req, res) => {

    const query = req.query;

    const sum = await Operation.sum('price', {
        where: {
            type: query.type,
            userId: req.params.userId
        }
    })

    res.json(sum);
}
