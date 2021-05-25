const Customers = require('./customers.dao');

exports.createCustomer = (req, res, next) => {
    const customer = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
    };
    Customers.create(customer, (err, customer) => {
        if (err) res.json({ error: err });
        res.json({ message: 'Customer created successfully' });
    });
}

exports.getCustomers = (req, res, next) => {
    Customers.get({}, (err, customers) => {
        if (err) res.json({ error: err });
        res.json({ Customers: customers });
    });
}

exports.getCustomer = (req, res, next) => {
    Customers.get({name: req.params.name}, (err, customer) => {
        if (err) res.json({ error: err });
        res.json({ Customer: customer });
    });
}

exports.UpdateCustomer = (req, res, next) => {
    const customer = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
    };
    Customers.update({_id: req.params.id }, customer, (err, customer) => {
        if (err) res.json({ error: err });
        res.json({ message: 'Customer updated successfully' });
    });
}

exports.removeCustomer = (req, res, next) => {
    Customers.delete({_id: req.params.id}, (err, customer) => {
        if (err) res.json({ error: err });
        res.json({ message: 'Customer deleted successfully' });
    });
}