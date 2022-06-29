const express = require('express');
const db = require('./config/mysql');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/transactions', (req, res) =>{
    const query = 'SELECT * FROM transactions ORDER BY id DESC;';

    db.query(query, (err, result) =>{
        if(err){
            console.log(err);
        }
        console.log(result)
        res.send(result);
    })
});

app.post('/transactions',(req, res) => {
    const {transactionName, amount} = req.body;
    const query = `INSERT INTO transactions (title, amount) 
                        VALUES ("${transactionName}", "${amount}")`

    db.query(query, (err, result) => {
        if(err){
            console.log(err)
        }
        res.send(result)
    })
    
});



app.listen(PORT, () => console.log(`App is running on port ${PORT}`));