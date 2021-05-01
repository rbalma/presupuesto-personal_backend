const Operation = require("../models/Operations");

exports.newOperations = async (req, res) => {
  try {
    const { name, price, date, type, userId } = req.body;
    const operation = await Operation.create({ name, price, date, type, userId });
    res.json(operation);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

exports.updateOperations = async (req, res) => {
  try {
    const { name, price, date } = req.body;
    const operation = await Operation.update(
      { name: name, price: price, date: date },
      {
        where: {
          id: req.params.id,
        }
      }
    );
    res.json(operation);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

exports.deleteOperations = async (req, res) => {
  try {
    const operation = await Operation.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.json(operation);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

exports.getOperationById = async (req, res) => {
  try {
    const operation = await Operation.findOne({
      where: {
        id: req.params.id,
      }
    });
    res.json(operation);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

exports.getPrices = async (req, res) => {
  try {
    const query = req.query;
    const sum = await Operation.sum("price", {
      where: {
        type: query.type,
        userId: req.params.userId,
      }
    });
    res.json(sum);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

exports.getOperations = async (req, res) => {
  try {
    let type = req.query.type;

    // NOT Filtering with type
    if (type === "") {
      operations = await Operation.findAll({
        attributes: ["id", "name", "price", "date", "type"],
        where: {
          userId: req.params.userId,
        },
        order: [["createdAt", "DESC"]],
        limit: 10,
      });
    } else {
      // Filtering with type
      operations = await Operation.findAll({
        attributes: ["id", "name", "price", "date", "type"],
        where: {
          userId: req.params.userId,
          type: type,
        },
        order: [["createdAt", "DESC"]],
      });
    }
    res.send(operations);
  } catch (error) {
    res.status(500).send({ message: error });
  }
}
