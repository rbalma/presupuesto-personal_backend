const Operation = require('../models/Operations');

exports.getOperations = async (req, res) => {
    const operations = await Operation.findAll({
        order: [
            ['id', 'DESC'],
        ]
    });
    res.json(operations);
}

exports.newOperations = async (req, res) => {
    const { name, price, date, type } = req.body; 

    const operation = await Operation.create({name, price, date, type});
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
            type: query.type
        }
    })

    res.json(sum);
}
