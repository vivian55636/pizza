const express = require ('express');
const app = express();
const port = 3000

const json = {
        "name": "Pizza Orders",
        "restaurant": "South Side Pizza",
        "pizzaSize": [
            "small",
            "medium",
            "large",
            "extra large"
        ],
        "pizzaToppings": [
            "pepperoni",
            "supreme",
            "hawaiian",
            "barbeque meatlovers",
            "garlic prawn"
        ],
        "pizzaQuantity": [
            1,
            2,
            3,
            4,
            5
        ]
    };

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send({"data": json});
});

app.post('/api/orders', (req, res) => {
    res.status(201).send({
            "orderId": "75D09EAC-B971-47BB-8C5D-0AA2D375C900",
            "items": [
                {
                    "pizzaSize": "small", 
                    "pizzaToppings": "pepperoni",
                    "pizzaQuantity": 2
                }

            ]
        })
});

app.get('/api/orders', (req, res) => {
    res.status(200).send({
        "orders": [
        {
            "orderId": "75D09EAC-B971-47BB-8C5D-0AA2D375C900",
            "date": "2025-01-25",
            "total": 100.00
        },

        {

            "orderId": "8995A643-1EBB-431D-89F7-AB9EAC021870",
            "date": "2025-02-10",
            "total": 130.00
        },

        {
            "orderId": "FBB46578-CFDE-4203-ABB6-88332104FE50",
            "date": "2025-02-18",
            "total": 110.00
        },

        {
            "orderId": "40E24030-461E-46B0-A5C2-1235D4D787C2",
            "date": "2025-02-24",
            "total": 140.00
        },

        {
            "orderId": "FB622AFF-FB85-43C3-B87F-C0CCEA35DDFD",
            "date": "2025-03-04",
            "total": 120.00
        }

        ]

    })

});

app.get('/api/orders/:orderId', (req, res) => {
    res.status(200).send({
        "orderId": "40E24030-461E-46B0-A5C2-1235D4D787C2",
        "date": "2025-02-24",
        "total": 140.00
    })

});

app.put('/api/orders/:orderId', (req, res) => {
    res.status(200).send({
        "orderId": "8995A643-1EBB-431D-89F7-AB9EAC021870",
            "date": "2025-02-10",
            "total": 130.55
    })
});

app.delete('/api/orders/:orderId', (req, res) => {
    res.status(204).send({
    "orderId": "75D09EAC-B971-47BB-8C5D-0AA2D375C900",
            "date": "2025-01-25",
            "total": 100.00
    })
});

app.post('/api/orders/:orderId/complete', (req, res) => {
    res.status(201).send({ message: 'Order Completed',
        "orderId": "FB622AFF-FB85-43C3-B87F-C0CCEA35DDFD",
            "date": "2025-03-04",
            "total": 120.00
    })
});

app.post('/api/orders/invalidOrderId', (req, res) => {
    res.status(400).send({ message: 'Invalid Order Id'})

});

app.listen(3000, () => console.log('Server running on port 3000'));