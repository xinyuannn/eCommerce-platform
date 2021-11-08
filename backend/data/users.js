import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Xinyuan Zhang',
        email: 'xinyuan@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Chenyan Zhou',
        email: 'chenyan@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
]

export default users