const Customers = require('./customers.controller');
module.exports = (router) => {
    router.post('/add', Customers.createCustomer);
    router.get('/customers', Customers.getCustomers);
    router.get('/customers/:name', Customers.getCustomer);
    router.put('/update/:id', Customers.UpdateCustomer);
    router.delete('/remove/:id', Customers.removeCustomer);
}