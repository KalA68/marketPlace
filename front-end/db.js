import bcrypt from 'bcryptjs';

const data = {

    products: [
        {
            image: "./images/shoe1",
            id: 1,
            name: "Shoe 1",
            price: 125.99,
            desc: "funky shoes"
        },
        {
            image: "./images/shoe2",
            id: 2,
            name: "Shoe 2",
            price: 65.99,
            desc: "sports shoes"
        },
        {
            image: "./images/shoe3",
            id: 3,
            name: "Shoe 3",
            price: 25.00,
            desc: "flit-flops"
        }
    ],

"Users": [
    {
        name: 'Kath',
        email: 'kat@k.com',
        password: bcrypt.hashSync('1234', 8)  
    },
    {
        name: 'Chris',
        email: 'chis@c.com',
        password: bcrypt.hashSync('5678', 8)
    }

]
};

export default data;

