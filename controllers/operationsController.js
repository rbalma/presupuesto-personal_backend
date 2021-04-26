exports.operationsHome = (req, res) => {
    res.send('index');
}

exports.newOperations = (req, res) => {
    const { name, price, date, type } = req.body; 
    const newOperation = {
        name,
        price,
        date,
        type
    }
    res.send('Enviaste el formulario');
}
