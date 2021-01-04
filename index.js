const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require("body-parser")
const { User } = require("./models/Users")

// application / x-www-from-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application / json
app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bae:1234@boilerplate.72x4c.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

app.get('/', (req, res) => res.send('Hello, world!'))

app.post('/register', (req, res) => {
    // 회원 가입시 필요한 정보들을 client 에서 가져오면
    // 그것들을 데이터베이스에 넣어준다. 
    const user = new User(req.body);
    user.save((err, doc)=>{
        if(err) return res.json( { success: false, err})
        return res.status(200).json({
            success: true,
        })
    }); // mongoDB 메소드
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));