const express    = require('express')
const app        = express();
const port       = 3100
const bodyParser = require('body-parser');
const cors       = require('cors');
const authRouter = require('./routes/authRouter')
const indexRouter = require('./routes/indexRouter')
const cookieSession  = require('cookie-session');

app.use(cors());
app.use(cookieSession({
  name: 'session',
  keys: ['hello instagram'],
  maxAge: 1000 * 60 * 60 
}))


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.use('/auth', authRouter);
app.use('/', indexRouter);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})