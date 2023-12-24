const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');
require('dotenv').config()
const app = express();
const bcryptSalt = bcrypt.genSaltSync(10)
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
  }));


  mongoose.connect(process.env.MONGO_URL)
app.get('/test', (req, res) => {
    res.json('test ok');
});
//eNfsR8XIe1YDmhF0
app.post('/register', async (req,res) =>{
    const {name,email,password} = req.body;
    try{
        const userDoc = await User.create({
              name,
              email,
              password:bcrypt.hashSync(password, bcryptSalt),
          })

          res.json(userDoc)
    } catch (e) {
        res.status(422).json(e)
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});