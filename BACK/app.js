const express = require('express')
const app     = express()
const cors    = require('cors')
const auth    = require('./routes/auth');


const port = 3200

app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use('/auth', auth);

app.get('/', )


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})