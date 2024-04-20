db.createCollection('user');
db.user.insertOne(
    {
        username: 'withcode',
        password: 'mysecurepassword',
        email: 'mail@example.com',
        subscribedAt: new Date()
    }
)