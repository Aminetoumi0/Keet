const PORT = 8000

const express = require('express')
const { MongoClient } = require('mongodb')
const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')

const uri = 'mongodb+srv://toumibusiness0:mypassword@cluster0.twesmhn.mongodb.net/?retryWrites=true&w=majority'


 
const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.get(express.json())

const Client = new MongoClient(uri)


app.get('/', (req, res) => {
    res.json('hello to my app')
})

app.post('/signup', async (req, res) => {
    console.log("request.body", req.body)
    const { email, password } = req.body

    const generateduserID = uuidv4()
    const hashed_password = await bcrypt.hash(password, 10) 

    try {
        await Client.connect()
        const database = Client.db('app-data')
        const users = database.collection('users')

        const existingUser = await users.findOne({ email })

        if (existingUser) {
            return res.status(409).send('User already exists. Please login')
        }

        const sanitizedEmail = email.toLowerCase()

        const data = {
            user_id: generateduserID,
            email: sanitizedEmail,
            hashed_password: hashed_password
        }
        const insertedUser = await users.insertOne(data)

        const token = jwt.sign(insertedUser, sanitizedEmail, {
            expiresIn: 68 * 24,
        })

        res.status(201).json({ token, user_id: generateduserID })
    } catch (err) {
        console.log(err)
    }


})

app.post('/login', async (req, res) => {
    const { email, password} = req.body

    try {
        await Client.connect()
        const database = Client.db('app-data')
        const users = database.collection('users')

        const user = await users.findOne({ email })

        const correctPassword = await bcrypt.compare(password, user.hashed_password)

        if (user && correctPassword) {
            const token = jwt.sign(user, email, {
                expiresIn: 60 * 24
            })
            res.status(201).json({ token, UserID: user.user_id })
        }
        res.status(400).send('Invalid Credentials')
    } catch (err) {
        console.log(err)
    }
})







app.put('/user', async ( req, res) => {
    const formData = req.body.formData
    try {
        await Client.connect()
        const database = Client.db('app-data')
        const users = database.collection('users')

        const query = { user_id: formData.user_id}
        const updateDocument = {
            $set: {
                name: formData.name,
                age: formData.age,
                show_sex: formData.show_sex,
                sex: formData.sex,
                sex_interest: formData.sex_interest,
                url: formData.url,
                likes: formData.likes,
                matches: formData.matches
            }
        }
        const insertedUser = await users.updateOne(query, updateDocument)
        res.send(insertedUser)
    } finally {
        await Client.close()
    }
})


app.get('/user', async(req, res) => {
    const user_id = req.query.user_id


    try {
        await Client.connect()
        const database = Client.db('app-data')
        const users = database.collection('users')
        const query = { user_id: user_id }

        const user = await users.findOne(query)
        res.send({
            name: user.name,
            age: user.age,
            show_sex: user.show_sex,
            sex: user.sex,
            sex_interest: user.sex_interest,
            url: user.url,
            likes: user.likes,
            matches: user.matches
        })
    } finally {
        await Client.close()
    }
})












app.get('/users', async(req, res) => {

    try{
        await Client.connect()
        const database = Client.db('app-data')
        const users = database.collection('users')

        const returnedusers = await users.find().toArray()
        console.log("returned user",returnedusers);
        res.send(returnedusers)
        
    } finally {
        await Client.close()
    }
})














app.listen(PORT, () => console.log('Server running on PORT '+ PORT))